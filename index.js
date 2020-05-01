const inquirer = require("inquirer");

const fs = require("fs");
const api = require("./utils/apicall");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
console.log(generateMarkdown);

const questions = [
{
type: "input",
name: "github",
message: "Please enter your github name:"
},
{
type: "input",
name: "email",
message: "Please enter your email address:"
},
{
type: "input",
name: "title",
message: "Please enter the title of your project:"
},
{
type: "input",
name: "description",
message: "Please enter a description of your repo:"
},
{
type: "input",
name: "toc",
message: "Please enter a table of contents:"
},
{
type: "input",
name: "installation",
message: "Please enter all the required dependencies:",
default: "npm i"
},    
{
type: "input",
name: "usage",
message: "Please enter a description of how to use this application:"
},
{
type: "list",
name: "license",
message: "Please enter licesing information about your project:",
choices: ["MIT", "DWTYW", "BSD 3", "None"]
},
{
type: "input",
name: "contributing",
message: "Please enter a list of who contributed to this project:"
},
{
type: "input",
name: "tests",
message: "To test this project, run the following command:",
default: "npm test"
}

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
inquirer.prompt(questions).then((inquirerResponses) => {
    api
    .getUser(inquirerResponses.github)
    .then(({ data }) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ... data }));
        })
    })
}

init();
