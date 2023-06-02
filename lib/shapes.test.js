
const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
  test('should render svg circle', () => {
    const expectedOutput = `<circle cx="50" cy="50" r="40" fill="red" />`;
    const  circle = new Circle();
    circle.setColor("red");
    const actualOutput = circle.render();
    expect(actualOutput).toEqual(expectedOutput);
    });
// copy this again for text 

  })

// create identical for square & triangle
