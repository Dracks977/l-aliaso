module.exports = function(app, path, ejs, fs, sequelize){
	app.get('/', function(req, res){
			res.send("hello");
	}
}