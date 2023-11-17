var allTheBooksEl = document.getElementById("allTheBooks");

fetch("/api/allbooks", {
  method: "GET",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (bookData) {
    for (i = 0; i < bookData.length; i++) {
      var book = document.createElement("li");
      book.innerHTML = bookData[i].title + " BY " + bookData[i].author;
      allTheBooksEl.append(book);
    }
  });

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const addBookButton = document.querySelector("#addBook");

addBookButton.addEventListener("click", function (e) {
  var book = {
    title: titleInput.value.trim(),
    author: authorInput.value.trim(),
  };

  fetch("/api/newbook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("added", data);
      titleInput.value = "";
      authorInput.value = "";
    });
  window.location.reload();
});
