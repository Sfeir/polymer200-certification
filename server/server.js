'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    api = require('./routes/api');

var app = express();
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//CORS SETTING
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, DELETE");
    next();
});

// JSON API
app.get('/api/movies', api.fetchMovies);
app.get('/api/movies/:id', api.fetchMovie);
app.get('/api/movies/:id/actors', api.fetchActorsOfMovie);
app.post('/api/movies', api.addMovie);
app.put('/api/movies', api.updateMovie);
app.delete('/api/movies/:id', api.deleteMovie);

app.listen(app.get('port'), function () {
    console.log('✔ Express server listening on http://localhost:%d/', app.get('port'));
});
