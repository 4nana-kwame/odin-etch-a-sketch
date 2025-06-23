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

        gridBox.addEventListener('mouseenter', () => {
            // Assign color for the first time
            if (!gridBox.dataset.color) {
                const r = Math.floor(Math.random() * 256) + 1;
                const g = Math.floor(Math.random() * 256) + 1;
                const b = Math.floor(Math.random() * 256) + 1;

                gridBox.dataset.color = `rgb(${r}, ${g}, ${b})`;
                gridBox.dataset.opacity = '0.5';
            } else {
                let currentOpacity = parseFloat(gridBox.dataset.opacity);

                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    gridBox.dataset.opacity = currentOpacity;
                }
            }

            gridBox.style.backgroundColor = gridBox.dataset.color;
            gridBox.style.opacity = gridBox.dataset.opacity;
        });
    }
}

buildGridBox(16, 16);

function promptUser() {
    gridContainer.innerHTML = '';

    const gridBoxSize = prompt('Enter the grid size you  prefer (From 1-100)');

    // Convert the input to number
    const inputToNumber = Number(gridBoxSize);

    if (!inputToNumber || inputToNumber > 100 || inputToNumber < 1) {
        alert('Enter a valid number.');
        buildGridBox(16, 16);
        return;
    } else {
        buildGridBox(inputToNumber,inputToNumber);
    }
}