module.exports = function(app, path, ejs, fs, sequelize){

	app.get('/', function(req, res){
		fs.readFile(path.resolve(__dirname + '/../view/index.html'), 'utf-8', function(err, content) {
			if (err) {
				res.end('error occurred' + err);
				return;
			} 
			let renderedHtml = ejs.render(content, {});
			res.end(renderedHtml);
		});
	}
	
}