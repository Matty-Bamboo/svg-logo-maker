// Include packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

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
    }
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter a color or hexadecimal number for the text:',
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
const {circle, square, triangle} = require('./lib/shapes')

function generatelogo(answers) {
    const text = answers.text;
    const textColor = answers.textColor;
    const shape = answers.shapes;
    const shapeColor = answers.shapeColor;

    switch (shape) {
        case "circle":
          logo = new circle(text, textColor, shapeColor).renderShape();
        case "square":
          logo = new square(text, textColor, shapeColor).renderShape();
        case "triangle":
          logo = new triangle(text, textColor, shapeColor).renderShape();
        default:
          return null;
      }
}

// Function to call app
init();