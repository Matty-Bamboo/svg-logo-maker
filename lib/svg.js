class SVG {
    constructor () {
        this.text = "";
        this.myshape = "";
    }

    render() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">${this.myshape}${this.text}</svg>`
    }
    
    setText(text, textColor) {
        this.text = `<text x="100" y="100" font-size="40px" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    
    setShape(shape) {
    this.myshape = shape.render();
    }
}

module.exports = SVG;