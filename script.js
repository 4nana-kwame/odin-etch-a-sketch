const gridContainer = document.querySelector('#grid-container');

// Width of grid container in CSS file
const containerWidth = 500;

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