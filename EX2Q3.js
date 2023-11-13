
const myColor = ["Red", "Green", "White", "Black"];

function printMyColor() {
    console.log(myColor.toString());
    console.log(myColor.join());
    console.log(myColor.join(''));
}

module.exports = { myColor, printMyColor };
