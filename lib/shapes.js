class Shape {
    constructor() {
      this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;     
    }
}

class Circle extends Shape {
    //  constructor() {
    //  super();
    //  }

    render () {
        return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />`; 
    }

    // getSVG(text) {
    //     const svgShape = this.render();
    //     return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    // }
}

class Square extends Shape {
    // constructor() {
    // super();
    // }

    render () {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }

    // getSVG(text) {
    //     const svgShape = this.render();
    //     return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    // }
}

class Triangle extends Shape {
    // constructor() {
    //     super() 
    // }

    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }

    // getSVG(text) {
    //     const svgShape = this.render();
    //     return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    // }
}

module.exports = {Circle, Square, Triangle};