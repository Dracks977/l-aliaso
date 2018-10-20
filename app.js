/*=====================Initialisation=====================*/
const express = require("express");
const app = express();
const http = require('http').Server(app);
const httpd = require('https');
const fs = require('fs');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const path = require('path');
/*=====================Database=====================*/
const session = require('express-session');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('aliaso', 'user', 'user', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
//define model
require('./model/model.js')(sequelize,Sequelize);

sequelize.sync().then(() => {
  console.log("DB created")
}).catch(error => {
  console.log(error)
})
/*======================Settings App====================*/
// Middleware session
app.engine('html', require('ejs').renderFile);

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: "clang",
}));

app.use(bodyParser.json());       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
})); 

/*======================Route fichier static (public)====================*/
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/img", express.static(__dirname + '/public/img'));
app.use("/js", express.static(__dirname + '/public/js'));

/*======================Routes==========================*/ 
require('./src/index.js')(app, path, ejs, fs, sequelize);

/*==================Start serv==================*/
http.listen(3000, function(){
	console.log('listening on *:' + 3000);
});