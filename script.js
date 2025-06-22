const gridContainer = document.querySelector('#grid-container');

const numberOfGridBoxes = 50;

for (let i = 0; i < numberOfGridBoxes; i++) {
    const gridBox = document.createElement('div');
    gridBox.style.width = '16px';
    gridBox.style.height = '16px';
    gridBox.style.border = '1px solid black';

    gridContainer.appendChild(gridBox);
}