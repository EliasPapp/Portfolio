//Canvas
/*
var canvas;
var contexto;
canvas = document.getElementById("game");
console.log(canvas);
contexto = canvas.getContext ("2d");

var x1=780, y1=300;
var x2=0, y2=300;
var w1=20, h1=150;
var w2=20, h2=150;

var ballx=400, bally=300;
var bw=30, bh=30;
var bvelx = 12;
var bvely = 12;
var vel = 15;
var setacima = false;
var setabaixo = false;
var teclaW = false;
var teclaS = false;

var pt1 = 0;
var pt2 = 0;

document.addEventListener ("keydown", function(e){
console.log(e.keyCode);
if(e.keyCode == '38') {
  setacima = true;
}
function btnUp() {
  setacima = true;
}
if(e.keyCode == '40'){
setabaixo = true;
}
if(e.keyCode == '87'){
teclaW = true;
}
if(e.keyCode == '83'){
teclaS = true;
}
})

document.addEventListener ("keyup", function(e){
console.log(e.keyCode);
if(e.keyCode == '38'){
setacima = false;
}
if(e.keyCode == '40'){
setabaixo = false;
}
if(e.keyCode == '87'){
teclaW = false;
}
if(e.keyCode == '83'){
teclaS = false;
}
})

function loop(){
	contexto.clearRect(0, 0, canvas.width, canvas.height);
	contexto.fillStyle = "#000000";
	contexto.fillRect(0, 0, canvas.width, canvas.height);
	contexto.fillStyle = "#FF0000";
	contexto.fillRect(x1, y1, w1, h1);
	contexto.fillStyle = "#0000FF";
	contexto.fillRect(x2, y2, w2, h2);
	if (setacima == true && y1 > 0){
	y1 -= vel;
	}
	if (setabaixo == true && y1+h1 < canvas.height){
	y1 += vel;
	}
	if (teclaW == true && y2 > 0){
	y2 -= vel;
	}
	if (teclaS == true && y2+h2 < canvas.height){
	y2 += vel;
	}
	contexto.fillStyle = "#EEEEEE";
	contexto.font = "100px Impact";
	contexto.fillText (pt1, 200, 100);
	contexto.fillText (pt2, 600, 100);
	contexto.font = "45px Impact";
	contexto.fillText ("Pontos", 365, 45);
	contexto.fillRect(ballx, bally, bw, bh);
	ballx += bvelx;
	bally += bvely;
	if (bally+bh > canvas.height){
	bvely = - bvely;
	}
	if (bally < 0){
	bvely = - bvely;
	}
	if (ballx+bw > canvas.width+bw){
	ballx = 400;
	bally = 300;
	pt1 ++;
	bvelx = + bvelx;
	bvelx = -8;
	bvely = Math.floor (Math.random() *16) - 8;
	}
	if (ballx < -30){
	ballx = 400;
	bally = 300;
	pt2 ++;
	bvelx = + bvelx;
	bvelx = 8;
	bvely = Math.floor (Math.random() *16) - 8;
	}
	if (bally > y1-bh && bally < y1+h1 && ballx+bw >= x1){
	bvelx = - bvelx;
	bvelx -= 0.5;
	//Multiplica o valor gerado aleatóriamente por 16, resultando em um número de 0 a 16, depois subtraindo-o por 8, podendo assim ser um número de -8 a 8.
	//Encontrado em: http://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
	bvely = Math.floor (Math.random() *16) - 8;
	}
	if (bally > y2-bh && bally < y2+h2 && ballx <= x2 + w2){
	bvelx = - bvelx;
	bvelx += 0.5;
	//Multiplica o valor gerado aleatóriamente por 16, resultando em um número de 0 a 16, depois subtraindo-o por 8, podendo assim ser um número de -8 a 8.
	//Encontrado em: http://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
	bvely = Math.floor (Math.random() *16) - 8;
	}
}
setInterval(loop, 1000/30);
*/