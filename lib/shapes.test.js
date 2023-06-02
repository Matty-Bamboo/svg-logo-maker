
const {Circle, Square, Triangle} = require('./shapes');

// Test for Circle shape
describe('Circle', () => {
  test('should render svg circle', () => {
    const expectedOutput = `<circle cx="100" cy="100" r="100" fill="red" />`;
    const  circle = new Circle();
    circle.setColor("red");
    const actualOutput = circle.render();
    expect(actualOutput).toEqual(expectedOutput);
    });
  })

// Test for Square shape
describe('Square', () => {
  test('should render svg square', () => {
    const expectedOutput = `<rect width="200" height="200" fill="red" />`;
    const  square = new Square();
    square.setColor("red");
    const actualOutput = square.render();
    expect(actualOutput).toEqual(expectedOutput);
    });
  })

  // Test for Triangle shape
  describe('Triangle', () => {
    test('should render svg triangle', () => {
    const expectedOutput = `<polygon points="100, 12 163, 121 37, 121" fill="red" />`;
    const  triangle = new Triangle();
    triangle.setColor("red");
    const actualOutput = triangle.render();
    expect(actualOutput).toEqual(expectedOutput);
    });
  })