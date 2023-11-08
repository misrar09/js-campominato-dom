


// create a 10x10 grid 

const grid = document.getElementById("grid");

// Showing the grid by selecting the deficulting level and clicking on the button
const difficulty = document.querySelector("#difficulty");
const playButton = document.querySelector(".playBtn");

playButton.addEventListener("click", function () {
    grid.innerHTML = "";

    let difficultyLevel = difficulty.value;

    let numbers;

    if (difficultyLevel == "easy") {
        for (let squareNum = 1; squareNum < 101; squareNum++) {
            createSquareDiv("box", squareNum, numbers);
        }

        numbers = randomNumbers(100);
        displayBombNumbers(numbers);

    }


    


    else if (difficultyLevel == "medium") {
        for (let squareNum = 1; squareNum < 82; squareNum++) {
            createSquareDiv("boxMedium", squareNum, numbers);
        }

        numbers = randomNumbers(81);
        displayBombNumbers(numbers);

    }
    else if (difficultyLevel == "hard") {
        for (let squareNum = 1; squareNum < 50; squareNum++) {
            createSquareDiv("boxHard", squareNum, numbers)
        }

        numbers = randomNumbers(49);
        displayBombNumbers(numbers);

    }
});

// FUNCTION CREATED TO REPEAT THE CODE
function createSquareDiv(className, squareNum, numbers) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add(className);
    grid.appendChild(squareDiv);
    squareDiv.innerHTML = `${squareNum}`;

    squareDiv.addEventListener("click", function () {
        if (numbers && numbers.includes(squareNum)) {
            console.log("box number is:", squareNum);
            squareDiv.classList.toggle("red");
        } else {
            console.log("box number is:", squareNum);
            squareDiv.classList.toggle("blue");
        }
    });

    return squareDiv;
}


//Generate 16 random numbers for each difficulty level and in the range of number of squaures:
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

//display the numbers in a span in html 
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











//




