const fs = require('fs');

fs.writeFile("Hello.txt", `Hello World! ${process.argv[2]}`, function(err){
    err ? console.log("Three's an error", err) : console.log("File created successfully!");
});

fs.readFile("Hello.txt", "utf8", function(err, data){
    err ? console.log("Three's an error", err) : console.log("file includes" + data);
});

fs.appendFile("Hello.txt", "\n\nHello Nerd!", function(err){
    err ? console.log("Three's an error", err) : console.log("File created successfully!");
});