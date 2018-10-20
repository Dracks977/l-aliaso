const express = require("express");
const app = express();
const http = require('http').Server(app);
const httpd = require('https');
const fs = require('fs');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const path = require('path');
const session = require('express-session');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'seat', 'da8c96d1f2928e3c117d37b3beaedf47a430e0f2', {
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
//let Verbe = require('./model/verbe.js')(sequelize,Sequelize);
require('./model/mots.js')(sequelize,Sequelize);

sequelize.sync().then(() => {
  console.log("DB created")
}).catch(error => {
  console.log(error)
})

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