const translate = require('translate-google');

module.exports = function(app, path, ejs, fs){

	/*
	// index avec les 30 dernier mots ajouter/mis a jour + le systeme de recherche
	*/
	app.get('/', (req, res) => {
		if (!req.query.q){
			MOTS.find(null,null,{sort: {'updated': -1}, limit: 60},(err, mots)=> {
				fs.readFile(path.resolve(__dirname + '/../view/index.html'), 'utf-8', function(err, content) {
					if (err) {
						res.end('error occurred' + err);
						return;
					} 
					let renderedHtml = ejs.render(content, {mots: mots, user: req.session.user});
					res.end(renderedHtml);
				});
			})
		} else {
			let regex = new RegExp('.*' + req.query.q + '.*', "i")
			MOTS.find({$or: [{"al": {$regex: regex}},{"traduction.fr": {$regex: regex}}/*, {"desc.fr": {$regex: regex}}*/]} , null, {sort: {'updated': -1}, limit: 30}, (err, mots) => {
				fs.readFile(path.resolve(__dirname + '/../view/index.html'), 'utf-8', function(err, content) {
					if (err) {
						res.end('error occurred' + err);
						return;
					} 
					let renderedHtml = ejs.render(content, {mots: mots, user: req.session.user});
					res.end(renderedHtml);
				});
			})
		}
	});

	app.get('/mots/gtranslate', (req, ress) => {
		let result = new Array();
		translate(req.query.q, {to: 'la'}).then(res => {
			result.push({to: 'Latin:', v: res});
			translate(req.query.q, {to: 'en'}).then(res => {
				result.push({to: 'Anglais:', v: res});
				translate(req.query.q, {to: 'de'}).then(res => {
					result.push({to: 'Allemand:', v: res});
					translate(req.query.q, {to: 'es'}).then(res => {
						result.push({to: 'Espagnol:', v: res});
						ress.send(result);
					}).catch(err => {
						console.error(err)
					})
				}).catch(err => {
					console.error(err)
				})
			}).catch(err => {
				console.error(err)
			})
		}).catch(err => {
			console.error(err)
		})
	})


	/* Ajout/modification mots (al est un champ unique)
	// {
	// 	al:  {type: String, required: true},
	// 	exemple : [String],
	// 	traduction: {
	// 		fr: [String]
	// 	},
	// 	desc: {
	// 		al: String,
	// 		fr: String
	// 	},
	// 	conjugaison: {
	// 		present: [String]
	// 	},
	// 	created : { type: Date },
	// 	updated : { type: Date },
	// }
	*/
	app.post('/mots', (req, res) => {
		if (req.session.user) {
			MOTS.findOne({al: req.body.al}, function(err, m){
				console.log(m);
				if (m && m.length != 0){
					m.set(req.body);
					m.save(function (err) {
						if (err){
							res.send(err);
							return
						} 
						res.status(200).send(m);
					});
				} else {
					let mm = new MOTS(req.body);
					mm.save(function (err) {
						if (err){
							res.send(err);
							return
						} 
						res.status(201).send(mm);
					});
				}
				
			})
		} else {
			res.status(403).send('Unauthorized');
		}

	})

	app.post('/login', (req, res) => {
		req.session.user = "admin";
		res.send(req.session)
	})

}