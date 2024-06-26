class Shape {

    constructor(color = '#000000') {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color); 
    }
    render() {
        const svg = `<rect x="90" y="40" width="180" height="200" fill="${this.color}" />`;
        return svg;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        return svg;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
        return svg;
    }
}

module.exports = { Circle, Triangle, Square };