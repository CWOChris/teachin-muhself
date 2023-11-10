const express = require('express');
const app = express();
const port = 3001;

const bookData = require('./data/books.json');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});