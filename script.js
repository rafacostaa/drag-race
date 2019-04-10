const canvas = document.getElementById('canvas');

//variavel para indicar que o canvas será de 2 dimensões
const ctx = canvas.getContext('2d');

// const img  = new Image();
// img.src = "./road texture.jpg";

// img.onload = function () {
//     ctx.drawImage(img,0,50, 1400,350);
// };



// const carOne  = new Image();
// carOne.src = "audi.png";

// img.onload = function () {
//     ctx.drawImage(img,0,50, 100,100);
// };

let timeReaction;
let x1 = 0;
let x2 = 0;
let x3 = 0;

//clear function
function clearCanvas() {
  ctx.clearRect(0,0,1400,400);
}

//objects===============================

ctx.fillStyle = "#FF0000";
ctx.fillRect(30,50,50,50);

ctx.fillStyle = "yellow";
ctx.fillRect(30,200,50,50);

// ctx.fillStyle = "magenta";
// ctx.fillRect(30,250,50,50);

ctx.beginPath();
ctx.lineWidth ='5';
ctx.strokeStyle = "white";
ctx.setLineDash([17]);
ctx.moveTo(0,150);
ctx.lineTo(1400, 150);
ctx.stroke();

// const img  = new Image();
// img.src = "./road texture.jpg";

// img.onload = function () {
//     ctx.drawImage(img,0,50, 1400,350);
// };


//trigger drag - maybe tree===============================
function moveCPU(){
  x1 += 10;
  
  clearCanvas();
  
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(30+x1,50,50,50);
  ctx.fillStyle = "yellow";
  ctx.fillRect(30+x2,200,50,50);
  
  //dash line  
  ctx.beginPath();
  ctx.lineWidth ='5';
  ctx.strokeStyle = "white";
  ctx.setLineDash([17]);
  ctx.moveTo(0,150);
  ctx.lineTo(1400, 150);
  ctx.stroke();
  
  window.requestAnimationFrame(moveCPU);
}

function movePlayer(){
  x2 += 10.2;
  
  
  clearCanvas();
  
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(30+x1,50,50,50);
  ctx.fillStyle = "yellow";
  ctx.fillRect(30+x2,200,50,50);
  
  //dash line  
  ctx.beginPath();
  ctx.lineWidth ='5';
  ctx.strokeStyle = "white";
  ctx.setLineDash([17]);
  ctx.moveTo(0,150);
  ctx.lineTo(1400, 150);
  ctx.stroke();
  
  speed.innerText = Math.floor(x2/5);
  
  window.requestAnimationFrame(movePlayer);
}

let speed = document.getElementById('speedId');


function shiftUp(){}
function nitro(){}

// function accelX2(){
//   return x3 = 10;
// }


//set functions to keyboard keys===============================
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 32) {
      movePlayer();
      reaction();
     
    }else if (event.isComposing || event.keyCode === 67) {
      //shiftUp();
     // accelX2();
     // console.log('up');
    }else if (event.isComposing || event.keyCode === 39) {
      nitro();
    }
}, false);


//tree functions TURN TO OBJECT ORIENTED==============================================
// function Tree (color,xPos,yPos,time,){
//   this.color = color; 
//   this.xPos = xPos;
//   this.yPos = yPos;
//   this.radius = 30;
//   this.time = time;
//   this.draw = function(){
//     ctx.beginPath();
//     ctx.arc(xPos, yPos,this.radius, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.closePath()
//   }
//   this.interval = setInterval(function () {
//     this.draw;
//   },time);
//   return 
// }

// circleRed = new Tree("red",600,40,2000);
// console.log(circle)

document.getElementById('start-button').addEventListener("click", startGame);

function startGame (){
  
  function treeRed (){
    setInterval(function red() {  
    ctx.beginPath();
    ctx.arc(600, 40, 30, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath()
    }, 2000);
  }
  treeRed();

  function treeYellow (){
    setInterval(function yellow() {  
      ctx.beginPath();
      ctx.arc(670, 40, 30, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
    }, 3000);
  }
  treeYellow();

  function treeGreen (){
    setInterval(function green() {  
      ctx.beginPath();
      ctx.arc(740, 40, 30, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();  
      startTime = new Date()
    }, 4000);
    setInterval(moveCPU, 4100);
  }
  treeGreen();
}
//MX-7

// function drawMoveDash(){


//      ctx.strokeStyle = 'white';
//     ctx.beginPath();
//     ctx.setLineDash([30, 30]);
//     ctx.moveTo(250, 30 + y);
//     ctx.lineTo(250, 750 + y);
//     ctx.stroke();
//     ctx.closePath();
//     y += 5;
//     if( y === 750){
//       y = 0;
//     }
//   }



//   window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };






  // game.addEventListener("keydown", event => {
  //   if (event.isComposing || event.keyCode === 37) {
  //     moveLeft();  
  //   }else if (event.isComposing || event.keyCode === 39) {
  //     moveRight();
  //   }
  // });



//TIME REACTION==================
//dentro da tree
let startTime=new Date();
let endTime=new Date();
let responseTime;

function reaction (){
  endTime = new Date();
  responseTime = (endTime.getTime()-startTime.getTime())/1000;
  console.log(responseTime)

  let responsePhrase= "";
	if (responseTime < 0.10)
		responsePhrase = "Well done!";
	else if (responseTime >= 0.10 && responseTime < 0.20)
		responsePhrase = "Nice!";
	else if (responseTime >= 0.20 && responseTime < 0.30)
		responsePhrase = "Could be better...";
	else if (responseTime >= 0.30 && responseTime < 0.60)
		responsePhrase = "Keep practising!";
	else if (responseTime >= 0.60 && responseTime < 1)
		responsePhrase = "Have you been drinking?";
	else if (responseTime >= 1)
    responsePhrase="Did you fall asleep?";
    
  return document.getElementById('timeId').innerHTML = `reaction time: ${responseTime}seconds`,document.getElementById('responsePhrase').innerHTML = responsePhrase;
}



//tree solution?
// var foo = (function () {
//   function bar() {
//     // perform task 3
//   };

//   function innerfoo (a) { 
//     if (/* some cond */ ) {
//       // perform task 1
//       bar();
//     }
//     else {
//       // perform task 2
//       bar();
//     }
//   }
//   return innerfoo;
// })();

