const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text for Logo (Not be more than 3 characters).",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color for the Logo",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for the Logo",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColour",
        message: "Enter the color for the shape of the Logo",
    },
]
module.exports = questions;