// Include packages needed for this application
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

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
    name: 'shape',
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
      //console.log("mysvg",logoText);
       
        writeToFile('logo.svg', logoText);
    });
}

// Function to generate logo

const SVG = require('./lib/svg');

function generatelogo(answers) {
    const text = answers.text;
    const textColor = answers.textColor;
    const shape = answers.shape;
    const shapeColor = answers.shapeColor;
    console.log("text:", text, "shapeColor:", shapeColor, "textColor:", textColor, "shape:", shape);

    let logo;

    switch (shape) {
        case "circle":
          logo = new Circle();
        break;
        case "square":
          logo = new Square();
        break;
        case "triangle":
          logo = new Triangle();      
        break;
        default:
          return null;
      }
        
    logo.setColor(shapeColor);
     const svg = new SVG();
     svg.setText( text, textColor);
     svg.setShape(logo);
      
    return svg.render();
}

// Function to call app
init();