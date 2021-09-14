
let width = prompt ("enter a width");
let height = prompt("enter a height");

function calcRectArea(width, height){
    return (width * height);
}

console.log(calcRectArea(width,height));

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.rect(0, 0, width, height);
ctx.fill();

var p = document.getElementById("p");

p = document.write((width*height)+("m²"));


