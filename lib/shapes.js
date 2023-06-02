class Shape {
    constructor() {
      this.shapeColor = "";
    }
    setColor(shapeColor) {
      this.shapeColor = shapeColor;     
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />`; 
    }   
}

class Square extends Shape {
    render () {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = {Circle, Square, Triangle};