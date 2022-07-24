let container = document.querySelector('#container');
let clear = document.querySelector('button');

clear.addEventListener('click', () => {
    gridSize()
});
function gridSize(){
    let number = prompt("What size would you like the grid to be? (1-100)");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    grid(number);
}
function grid(size){
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < (size * size); i++){
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';
        container.appendChild(cell);

        cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = 'black';
        });

        function clearGrid(){
            clear.addEventListener('click', e =>{
                cell.style.backgroundColor = 'white';
            });
        }
        clearGrid();

    };
};
grid(16);

