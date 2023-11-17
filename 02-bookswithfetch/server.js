const express = require("express");
const bookData = require("./data/books.json");

const app = express();

//Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const PORT = 3001;

app.get("/books", (req, res) => {
  res.sendFile(__dirname + "/public/books.html");
});

app.get("/api/allbooks", (req, res) => {
  res.json(bookData);
});

app.post("/api/newbook", (req, res) => {
  console.log(req.body);
  bookData.push(req.body);
  res.json(`Book has been added!`);
});

app.get("/api/bunchofbooks", (req, res) => {
  res.json(`${req.method} This needs to be a post!`);
});

app.post("/api/bunchofbooks", (req, res) => {
  res.json(`${req.method} was received! Bunch of Books!`);
});

app.listen(PORT, () => {
  console.log("LISTENING ON PORT " + PORT);
});
