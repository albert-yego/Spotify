const fs = require('fs')
const express = require('express');
const { request } = require('http');
const app = new express();
const path = require('path');
const port = 5600;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Spotify.html'));
});
app.get('/skate', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/skate.html'));
});
app.get('/workout', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/workout.html'));
});
app.get('/study', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/study.html'));
});
app.get('/hola', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/hola.html'));
});
app.get('/house', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/house.html'));
});
app.get('/me', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/me.html'));
});
app.get('/tango', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/tango.html'));
});
app.get('/hype', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/hype.html'));
});
app.get('/edm', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/edm.html'));
});
app.get('/classical', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/classical.html'));
});
app.get('/lit', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/lit.html'));
});
app.get('/run', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/run.html'));
});
app.get('/werkout', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/werkout.html'));
});
app.get('/perfect', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/perfect.html'));
});
app.get('/jet', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/jet.html'));
});
app.get('/emoji1', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/emoji1.html'));
});
app.get('/emoji2', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/emoji2.html'));
});
app.get('/goodstuff', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/goodstuff.html'));
});
app.get('/chicanorap', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/chicanorap.html'));
});
app.get('/chill', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/albums/chill.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about/about.html'));
});
app.listen(port, function () {
    console.log(`Listening at port ${port}`);
});

app.get('/dat', (req, res) => {
    const databases = require('./playlist.json');
    console.log(databases);
    res.json(databases);
})