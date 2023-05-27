class shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class circle extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    renderShape () {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="${shapeColor}" />
        <text x="50" y="50" font-size="24px" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
        `;
    }
}

class square extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    renderShape () {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="${shapeColor}" />
                <text x="100" y="100" font-size="40px" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>
                `;
    }
}

class triangle extends shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor) 
    }

    renderShape () {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="135" font-size="40px" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
      `;
    }
}

module.exports = {circle, square, triangle};