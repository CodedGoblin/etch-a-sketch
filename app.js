const generate = document.querySelector('button');
generate.addEventListener('click', ()=>{
    const dims =  parseInt(prompt('Give a Dimension to the Square Grid: '));
    if (dims <= 100 && dims > 0){
        const grid = document.querySelector(".container");
        grid.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
        for(let i=0;i<dims*dims;i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.append(cell);
        };
        const cells = document.querySelectorAll(".cell");
        cells.forEach(function(cell){
            cell.addEventListener('mouseover', ()=>{
            cell.classList.toggle('hover');
            })
        })
    }else{
        alert('Please enter a valid dimension below 101')
    }
});







