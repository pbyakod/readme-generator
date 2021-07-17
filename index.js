// declaring packages used
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questionbank for program to prompt
const questions = [
    // user input for title
    {
        type: 'input',
        message: 'What is the TITLE of your project?',
        name: 'title',
    },
    // user input for description
    {
        type: 'input',
        message: 'Please provide a SHORT DESCRIPTION for your project',
        name: 'description',
    },
    // user input for install instructions
    {
        type: 'input',
        message: 'Please enter the INSTALLATION INSTRUCTIONS for your project',
        name: 'install',
    },
    // user input for usage information
    {
        type: 'input',
        message: 'Please provide some USAGE INFORMATION for your project',
        name: 'usage',
    },
    // user input for contribution guidelines
    {
        type: 'input',
        message: 'Please enter the CONTRIBUTION GUIDELINES for your project',
        name: 'guidelines',
    },
    // user input for test instructions
    {
        type: 'input',
        message: 'Please provide the TEST INSTRUCTIONS for your project',
        name: 'testing',
    },
    // user selection of license
    {
        type: 'input',
        message: 'Please select the LICENSE you would like to use.',
        choices: ['Apache-2.0', 'Boost', 'BSD-2-Clause', 'BSD-3-Clause', 'Eclipse', 'GNU-GPL-v3', 'IBM', 'ISC', 'MIT','Mozilla-2.0', 'ODbL', 'SIL', 'None'],
        name: 'license',
    },
    // user input for github username
    {
        type: 'input',
        message: 'Please provide your GITHUB USERNAME.',
        name: 'github',
    },
    // user input for email id
    {
        type: 'input',
        message: 'Please provide your EMAIL ADDRESS.',
        name: 'email',
    },
];

// function to initialize markdown page
function init() {
    // prompt for asking questions
    inquirer.prompt(questions)
    // generating a README.md file
        .then(data => {
            fs.writeFile('CreatedREADME.md', generateMarkdown(data), (err) => err ? console.rror(err) : console.log('Generated README.md'));
        })
}

// calling init() function
init();

