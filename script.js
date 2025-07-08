const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');
const colorBtn = document.getElementById('color');

 function createGrid(size){
    container.innerHTML = ''; 
    const squareSize = 960/size;

    for(let i=0;i<size*size;i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
    }
}

resetBtn.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (max 100):');
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    }
    else {
        alert('please enter a number between 1 and 100');
    }
});

colorBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      
    square.dataset.opacity = '0.1';
    square.dataset.rgb = ''; 

    square.addEventListener('mouseover', () => {
      let currentOpacity = parseFloat(square.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;

        
        if (!square.dataset.rgb) {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          square.dataset.rgb = `${r},${g},${b}`;
        }

        const [r, g, b] = square.dataset.rgb.split(',');
        square.style.backgroundColor = `rgba(${r},${g},${b},${currentOpacity})`;
      }
    });
    });
});

createGrid(16);