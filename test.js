// create a 10x10 grid
const grid = document.getElementById("grid");

// Showing the grid by selecting the difficulty level and clicking on the button
const difficulty = document.querySelector("#difficulty");
const playButton = document.querySelector(".playBtn");

let numbers = []; // Initialize the numbers array
let totalSquareSum = 0; // Initialize the total sum of all square numbers
let currentSquareSum = 0; // Initialize the current sum of square numbers clicked

// Function to clear and recreate the grid
playButton.addEventListener("click", function () {
    grid.innerHTML = ""; // Clear the grid
    const difficultyLevel = difficulty.value;

    if (difficultyLevel == "easy") {
        numbers = randomNumbers(100);
        totalSquareSum = calculateTotalSquareSum(100);
        for (let squareNum = 1; squareNum <= 100; squareNum++) {
            createSquareDiv("box", squareNum, numbers);
        }
    } else if (difficultyLevel == "medium") {
        numbers = randomNumbers(81);
        totalSquareSum = calculateTotalSquareSum(81);
        for (let squareNum = 1; squareNum <= 81; squareNum++) {
            createSquareDiv("boxMedium", squareNum, numbers);
        }
    } else if (difficultyLevel == "hard") {
        numbers = randomNumbers(49);
        totalSquareSum = calculateTotalSquareSum(49);
        for (let squareNum = 1; squareNum <= 49; squareNum++) {
            createSquareDiv("boxHard", squareNum, numbers);
        }
    }

    displayBombNumbers(numbers);
});

// FUNCTION CREATED TO REPEAT THE CODE
function createSquareDiv(className, squareNum, numbers) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.textContent = `${squareNum}`;

    squareDiv.addEventListener("click", function () {
        if (numbers && numbers.includes(squareNum)) {
            alert("Game Over!");
            resetGame();
        } else {
            console.log("box number is:", squareNum);
            squareDiv.classList.toggle("blue");
            currentSquareSum += squareNum;
            console.log("Current Square Sum:", currentSquareSum);

            // Calculate the sum of the clicked square numbers
            // Calculate the sum of numbers that were not clicked

            ************************************************
            let notClickedNumbersSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (!clickedNumbers.includes(numbers[i])) {
                    notClickedNumbersSum += numbers[i];
                }
            }
            **************************************************

            // Check if the user has won
            if (currentSquareSum + notClickedNumbersSum === totalSquareSum) {
                alert("You Won!");
                resetGame();
            }
        }
    });

    return squareDiv;
}

// Generate 16 random numbers for each difficulty level and in the range of the number of squares
function randomNumbers(totalSquares) {
    const bombs = new Set();
    while (bombs.size < 16) {
        const randomNumber = Math.floor(Math.random() * totalSquares) + 1;
        bombs.add(randomNumber);
    }
    return Array.from(bombs);
}

// Display the numbers in a span in HTML
function displayBombNumbers(numbers) {
    const numberBombs = document.getElementById('numBombs');
    numberBombs.innerHTML = "Bombs: " + numbers.join(" ");
}

// Reset the game
function resetGame() {
    numbers = [];
    currentSquareSum = 0;
    grid.innerHTML = "";
    document.getElementById('numBombs').innerHTML = "Bombs:";
}

// Calculate the total sum of square numbers
function calculateTotalSquareSum(totalSquares) {
    return (totalSquares * (totalSquares + 1)) / 2;
}
