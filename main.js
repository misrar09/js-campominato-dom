// create a 10x10 grid 

const grid = document.getElementById("grid");

// Showing the grid by selecting the deficulting level and clicking on the button
const difficulty = document.querySelector("#difficulty");
const playButton = document.querySelector(".playBtn");

playButton.addEventListener("click", function () {
    grid.innerHTML = "";

    let difficultyLevel = difficulty.value;

    if (difficultyLevel == "easy") {
        for (let i = 1; i < 101; i++) {
            createSquareDiv("box", i);
        }

        const numbers = randomNumbers(100);
        displayBombNumbers(numbers);

    }
    else if (difficultyLevel == "medium") {
        for (let i = 1; i < 82; i++) {
            createSquareDiv("boxMedium", i);
        }

        const numbers = randomNumbers(81);
        displayBombNumbers(numbers);

    }
    else if (difficultyLevel == "hard") {
        for (let i = 1; i < 50; i++) {
            createSquareDiv("boxHard", i)
        }

        const numbers = randomNumbers(49);
        displayBombNumbers(numbers);

    }
});

// FUNCTION CREATED TO REPEAT THE CODE
function createSquareDiv(className, i) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.innerHTML = `${[i]}`;

    squareDiv.addEventListener("click", function () {
        console.log("box number is:", i);
        squareDiv.classList.toggle("blue");

    });

    return squareDiv; // Return the created div 
}

const easySquares = 100
const mediumSquares = 81
const hardSquares = 49

function randomNumbers(totalSquares) {
    const numbers = [];
    for (let i = 0; i < 16; i++) {
        const randomNumber = Math.floor(Math.random() * totalSquares) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}



function displayBombNumbers(numbers) {
    const numberBombs = document.getElementById('numBombs');
    numberBombs.innerHTML = ""; // Clear previous bomb numbers

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const numberElement = document.createElement('span');
        numberElement.textContent = `${number} `;
        numberBombs.appendChild(numberElement);
    }
    
}








//Generate 16 random numbers for each difficulty level
//




