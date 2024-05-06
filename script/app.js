import conf from './config.js';

let canvas = document.getElementById("game");

let playerNick = window.prompt("Enter your nickname: ");

let g = new Gamepad(canvas, conf, playerNick);

g.init();

function runGame(){
    g.update();
    g.draw();
    requestAnimationFrame(runGame);
}

function keyDownHandler(event){
    g.keyDownHandler(event.key.toLowerCase());
}

function keyUpHandler(event){
    g.keyUpHandler(event.key.toLowerCase());
}

window.onload = runGame;

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);