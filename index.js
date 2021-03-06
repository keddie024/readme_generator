// Include packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Creates an array of questions for user input.
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ['MIT', 'Apache', 'GNU',],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "use",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute",
    },
];

// Writes the README file or generates an error if unable.
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Generating README...");
        }
    })
}

// Initializes the application.
function init() {
    inquirer.prompt(questions)
    .then((response) =>
        generateMarkdown(response)
    )
    .then((response) =>
        writeToFile("sample.md", response)
    )
}

// Function call to initialize app
init();
