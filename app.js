
var express = require('express')
var bodyParser = require('body-parser')
var ejsLayouts = require('express-ejs-layouts')
var path = require('path')
var app = express()

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
require('./routes')(app)
app.listen(80, function(){
    console.log("Server Başlatı")
})
