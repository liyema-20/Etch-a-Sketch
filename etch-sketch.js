let size = 0;

function getSize(){
    do {
        size = prompt("How big should the grid be?");
        console.log(typeof size);
        

    } while ((size < 16 || size > 64) || isNaN(size) === true);
    
    size = parseInt(size);
}

getSize();

function changeColor(){
    div = document.querySelector('.block');
    div.style.background = "black";
}



function createGrid(){
    for (let i = 0; i < size ** 2; i++){

        const div = document.createElement('div');
        div.classList.add("block");
        div.addEventListener("mouseenter", function( event ) {
        event.target.style.background = "black";});
        let sketchBox = document.querySelector('#sketchBox');
        sketchBox.appendChild(div);
    }

    const btn = document.querySelector('.clearButton');
    btn.addEventListener("click", function( event ){
        const blockList = document.querySelectorAll('.block');
        blockList.forEach(
            function(currentValue){
                currentValue.style.background = "white";
            }
        )
    });
}



createGrid();
