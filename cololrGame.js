var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setUpModeButton();
    setUpSquares();
    reset();
}

function setUpModeButton() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add click Listener to squares
        squares[i].addEventListener("click", function () {
            // Grab color of clicked square
            var clickedColor = this.style.background;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match pickedColors
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // Change colors of squares 
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})

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