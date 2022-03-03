let size = 0;

function getSize(){
    do {
        size = prompt("How big should the grid be?");
        console.log(typeof size);
        

    } while ((size < 16 || size > 64) || isNaN(size) === true);
    
    size = parseInt(size);
}

getSize();

for (let i = 0; i < size; i++){
    const div = document.createElement('div');
    let sketchBox = document.querySelector('.sketchBox');

    sketchBox.appendChild(div);
    
}