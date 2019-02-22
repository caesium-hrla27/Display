const express = require('express')
const morgan = require('morgan')
const parser = require('body-parser')
const path = require('path');
const routes = require('./routes.js');

var port = 3009;
var app = express();
app.use(parser.json())
app.use(parser.urlencoded({extended: 'true'}))
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/dist')));

app.use("/api",routes);

app.listen(port,()=>{console.log('CS-NIK-DISPLAY is  Running at:', port)});
