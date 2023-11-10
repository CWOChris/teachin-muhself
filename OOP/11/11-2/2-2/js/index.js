const inquirer = require('inquirer');
const fetch = require('node-fetch');

async function main() {
    const prompt = await inquirer.prompt({
        type: 'input',
        name: 'movieName',
        message: 'Enter a movie name:',
    });

    var url = `http://www.omdbapi.com/?t=${prompt.movieName}&apikey=9fa6058b`;

    const response = await fetch(url);
    const data = await response.json();
    console.log('=========PLOT=========');
    console.log(data.Plot);
    console.log('=========ACTORS=========');
    console.log(data.Actors);
}

console.log('=========WELCOME=========');
main();