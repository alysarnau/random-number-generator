let randomNumberDiv = document.getElementById('random-number')
let generateButton = document.getElementById('generate')
let topLimit;
let randomNumber = 0;

function generateRandomNumber() {
    topLimit = document.getElementById('top-limit-number').value
    randomNumber = Math.floor(Math.random() * topLimit)
    randomNumberDiv.innerText = `${randomNumber}`
}

generateRandomNumber()


generateButton.addEventListener('click', generateRandomNumber)
