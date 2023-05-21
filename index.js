// Include packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
//const shapes = require("./lib/shapes");


// Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 text characters:',
    validate: (input) => {
        if (input.length <= 3) {
            return true;
        }
        return 'Please enter up to 3 text characters:'
    },
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter a color or hexadecimal number for the text:'
},
{
    type: 'list',
    name: 'shapes',
    message: 'choose a shape for your logo',
    choices: ['circle', 'square', 'triangle'],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'choose a background color or hexadecimal number for your logo:',
},
]

// Create a function to write .svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`logo file "${fileName}" created successfully!`);
      });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const logoText = generatelogo(answers);
        writeToFile('logo.svg', logoText);
    });
}

// Function to generate logo
function generatelogo(answers) {
    const text = answers.text;
    const textColor = answers.textColor;
    const shape = answers.shapes;
    const shapeColor = answers.shapeColor;

    switch (shape) {
        case "circle":
          return `
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
            <text x="50" y="50" font-size="24px" fill="${textColor}">${text}</text>
          </svg>
          `;
        case "square":
          return `
          <svg viewBox="0 0 100 100">
            <rect width="100" height="100" fill="${shapeColor}" />
            <text x="50" y="50" font-size="24px" fill="${textColor}">${text}</text>
          </svg>
          `;
        case "triangle":
          return `
          <svg viewBox="0 0 100 100">
            <path d="M50 0 L0 50 A50 50 0 0 1 0 100 L50 50 A50 50 0 0 1 50 0 Z" fill="${shapeColor}" />
            <text x="50" y="50" font-size="24px" fill="${textColor}"> ${text}</text>
          </svg>
          `;
        default:
          return null;
      }
}

// Function to call app
init();