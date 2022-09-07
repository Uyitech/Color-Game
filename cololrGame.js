var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    alert("clicked button");
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // Add colors to square
    squares[i].style.background = colors[i];

    // Add click Listener to squares
    squares[i].addEventListener("click", function () {
        // Grab color of clicked square
        var clickedColor = this.style.background;
        // Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = []
    // Repeat Num times
    for (var i = 0; i < num; i++) {
        // Get random colors and push into array 
        arr.push(randomColors());
    }
    // Return that array
    return arr;
}

function randomColors() {
    // Pick a red from -255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from -255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}