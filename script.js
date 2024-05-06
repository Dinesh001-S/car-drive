let board = document.getElementsByClassName("board");
let block = document.getElementById("square");
let car = document.getElementById("car");

block.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px" ;
});

const interval = setInterval(gameOver,1);


function gameOver(){
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(blockLeft == carLeft && blocktop > 300){
        alert("Game Over!!!");
        clearInterval(interval);
        location.reload();
    }
}

function moveLeft(){
    if(car.style.left==="0px"){
        return;
    }

    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));

    carLeft = carLeft - 100;

    car.style.left = carLeft + "px";
}

function moveRight(){
    if(car.style.left==="200px"){
        return;
    }

    let carLeft=parseInt(window.getComputedStyle(car).getPropertyValue("left"));

    carLeft = carLeft + 100;

    car.style.left = carLeft + "px";
}

document.addEventListener("keydown",(event)=>{
    var carleft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    if(event.key=="ArrowLeft"){
        if(carleft>0){
            carleft = carleft - 100;
            car.style.left = carleft + "px";
        }
    }

    if(event.key=="ArrowRight"){
        if(carleft<200){
            carleft = carleft + 100;
            car.style.left = carleft + "px";
        }
    }

})