# Etch-a-Sketch

A browser-based Etch-a-Sketch app built using HTML, CSS, and JavaScript. Users can draw on a grid by simply hovering over the boxes, with each hover darkening the color until it reaches full opacity. You can also change the grid size dynamically.

## Features

- Dynamic grid creation (up to 100x100)
- Random RGB color fill on first hover
- Progressive darkening on repeated hover
- Responsive design with centered layout
- Clean, interactive UI with styled buttons

## How It Works

- On page load, a 16x16 grid is generated inside a 400px container.
- Hovering over a grid square assigns it a random color and sets its opacity to 0.5.
- Each subsequent hover increases the opacity by 0.1 until it reaches 1.
- Users can change the grid size by clicking the **"Change grid size"** button and entering a value from 1 to 100.

## Technologies Used

- **HTML5** for structure  
- **CSS3** for styling and layout  
- **JavaScript (ES6)** for interactivity and DOM manipulation  
