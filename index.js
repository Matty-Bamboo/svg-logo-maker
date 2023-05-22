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
        console.log(`Generated "${fileName}" created successfully!`);
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
          <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
            <text x="50" y="50" font-size="24px" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
          `;
        case "square":
          return `
          <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="${shapeColor}" />
            <text x="50" y="50" font-size="24px" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
          `;
        case "triangle":
          return `
          <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
            <text x="150" y="135" font-size="40px" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
          `;
        default:
          return null;
      }
}

// Function to call app
init();