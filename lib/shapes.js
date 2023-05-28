class shapes {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;     
    }
}

class circle extends shapes {
    constructor() {
        super();
    }

    render () {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`; 
    }

    getSVG(text) {
        const svgShape = this.render();
        return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    }
}

class square extends shapes {
    constructor() {
        super();
    }

    render () {
        return `<rect width="200" height="200" fill="${this.color}" />`;
    }

    getSVG(text) {
        const svgShape = this.render();
        return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    }
}

class triangle extends shapes {
    constructor() {
        super() 
    }

    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }

    getSVG(text) {
        const svgShape = this.render();
        return `<svg xmlns="http://www.w3.org/2000/svg">${svgShape}${text}</svg>`;
    }
}

module.exports = {circle, square, triangle};