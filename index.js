// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        type: "input",
        message: "What kind of license should your project have?",
        name: "license",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Generating README...");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile("README.md", generateMarkdown(response)));
}

// Function call to initialize app
init();
