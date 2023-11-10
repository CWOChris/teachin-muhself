const express = require('express');
const path = require('path');
const app = express();

const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    const bookTitle = req.query.title;
    

    const bookFound = bookData.filter((book) => book.id == bookId);

    res.send('Hello World!');
});

app.get('/homepage', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/api/books', (req, res) => {
    const books = [
        {id: 1, title: 'Book 1', author: 'John Doe', year: '2013'},
        {id: 2, title: 'Book 2', author: 'Jane Doe', year: '2016'},
        {id: 3, title: 'Book 3', author: 'John Smith', year: '2018'},
        ];
        res.json(books);
});

app.get('*', (req, res) => {
    res.send('404 page');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});