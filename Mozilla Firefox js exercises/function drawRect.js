document.addEventListener("DOMContentLoaded", (e) => {

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
for(let i = 0; i <=1; i++){
ctx.beginPath();
ctx.fillStyle = color;
ctx.fillRect(x,y,width,height);
ctx.fill();
}
}
draw();
})

