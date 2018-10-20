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
const sequelize = new Sequelize('database', 'username', 'password', {
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