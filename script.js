const gridContainer = document.querySelector('#grid-container');

const numberOfGridBoxes = 532;

for (let i = 0; i < numberOfGridBoxes; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('box');

    gridContainer.appendChild(gridBox);
}

gridContainer.addEventListener('mousemove', (event) => {
    const target = event.target;

    if (target.classList.contains('box')) {
        target.style.backgroundColor = 'black';
    }
});