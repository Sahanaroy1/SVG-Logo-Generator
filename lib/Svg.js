class LogoText {
    constructor(text, colour) {
        this.colour = colour;
        this.text = text;
    }
    render() {
        return `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
}

class SVG {
    constructor(shape, logotext) {
        this.shape = shape;
        this.logotext = logotext;
    }
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.logotext.render()}</svg>`;
        return svg;
    }
}

module.exports = { LogoText, SVG };