const gridContainer = document.querySelector('#grid-container');
const btnPrompt = document.querySelector('#prompt');

// Width of grid container in CSS file
const containerWidth = 400;

function buildGridBox(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('box');
        gridBox.style.width = `${containerWidth/cols}px`;
        gridBox.style.height = `${containerWidth/rows}px`;
        gridContainer.appendChild(gridBox);
    }
}

buildGridBox(16, 16);

gridContainer.addEventListener('mousemove', (event) => {
    const target = event.target;

    if (target.classList.contains('box')) {
        target.style.backgroundColor = 'black';
    }
});

function promptUser() {
    gridContainer.innerHTML = '';

    const gridBoxSize = prompt('Enter the grid size you  prefer (From 1-100)');

    // Convert the input to number
    const inputToNumber = Number(gridBoxSize);

    if (inputToNumber > 100 || inputToNumber < 1) {
        alert('Enter a valid number.');
        buildGridBox(16, 16);
    } else {
        buildGridBox(inputToNumber,inputToNumber);
    }
}