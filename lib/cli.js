const inquirer = require("inquirer");
const questions = require("./questions");
const { Circle, Triangle, Square } = require("./shapes");
const { LogoText, SVG } = require("./svg");
const { writeFile } = require("fs/promises");

class CLI {
  constructor() {}
  run() {
    return inquirer
      .prompt(questions)
      .then((responses) => {
        const svg = this.generateSVG(responses);

        const markup = svg.render();

        return writeFile("logo.svg", markup);
      })
      .then(() => console.log("Logo is successfully created!"))

      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }

  generateSVG(options) {
    const logoText = new LogoText(options.text, options.textColor);
    switch (options.shape) {
      case "Circle":
        const circle = new Circle(options.shapeColour);
        return new SVG(circle, logoText);
      case "Square":
        const square = new Square(options.shapeColour);
        return new SVG(square, logoText);
      case "Triangle":
        const triangle = new Triangle(options.shapeColour);
        return new SVG(triangle, logoText);
    }
  }
}

module.exports = CLI;
