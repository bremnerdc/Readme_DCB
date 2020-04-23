const inquirer = require("inquirer");
const generateMarkdown =("./utils/generateMarkdown.js");
const fs = require("fs");

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
message: "Please enter the dependencies your project needs (WORKING):",
default: "npm install"
},    
{
type: "input",
name: "usage",
message: "Please enter a description of how to use this application (WORKING)"
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
message: "Please enter a list of who helped complete this project: (WORKING)"
},
{
type: "input",
name: "tests",
message: "Please enter the tests that should be run on this repo (WORKING)",
default: "npm test"
},

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
inquirer.prompt(questions).catch((inquirerResponses) => {
writeToFile("README.md", generateMarkdown({ ...inquirerResponses}));
})
}

init();
