const generate = document.querySelector('button'); // select the generate button
// at generate button click:
generate.addEventListener('click', ()=>{
    // user inputs the grid dimension
    const dims =  parseInt(prompt('Give a Dimension to the Square Grid: '));

    if (dims <= 100 && dims > 0){ // 0 > dims >= 100
        // Generate the Grid  
        const grid = document.querySelector(".container");
        grid.style.gridTemplateRows = `repeat(${dims}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
        for(let i=0;i<dims*dims;i++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.append(cell);
        };
        // Generate the cells 
        const cells = document.querySelectorAll(".cell");
        cells.forEach(function(cell){
            cell.offset = 100; // color offset starts at 100% (white)
            cell.addEventListener('mouseover', ()=>{ // with each hover event
                let rgb = randRGB(cell.offset); // return random rgb
                cell.style.backgroundColor = rgb; // set cell background color
                cell.offset -= 10; // offset random's roof by -10% (e.g: 255*10%) 
            })
        })
    }else{
        alert('Please enter a valid dimension below 101')
    }
});


// generate random rgb values multiplied by a 10% 
// equation: Math.floor(Math.random()*(255*offset/100)) :Start at white and stop at black
const randRGB = function(offset){
    let r = Math.floor(Math.random()*(255*offset/100));
    let g = Math.floor(Math.random()*(255*offset/100));
    let b = Math.floor(Math.random()*(255*offset/100));
    if(r <= 0) r=0; // default to 0 if negative values
    if(g <= 0) g=0;
    if(b <= 0) b=0;
    return `rgb(${r},${g},${b})`; // return rgb color
}





