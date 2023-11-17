const express = require('express');
const bookData = require('./data/books.json');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const PORT = 3001;

app.get('/books', (req, res) => {
    res.sendFile(__dirname + '/public/books.html');
});

app.get('/api/allbooks', (req, res) => {
    res.json(bookData);
});

app.post('/api/newbook', (req, res) => {
    res.json(`${req.method} was received!`);
});

app.get('/api/bunchofbooks', (req, res) => {
    res.json(`${req.method} this needs to be a post!`);
});

app.post('/api/bunchofbooks', (req, res) => {
    res.json(`${req.method} was received! Bunch of Books!`);
});
