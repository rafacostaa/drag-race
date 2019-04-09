const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');


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

//tree samples canvas===============================
//red
// ctx.beginPath();
// ctx.arc(600, 40, 30, 0, Math.PI * 2);
// ctx.fillStyle = "red"; // !
// ctx.fill();
// ctx.closePath();
//yellow
// ctx.beginPath();
// ctx.arc(670, 40, 30, 0, Math.PI * 2);
// ctx.fillStyle = "yellow"; // !
// ctx.fill();
// ctx.closePath();
//green
// ctx.beginPath();
// ctx.arc(740, 40, 30, 0, Math.PI * 2);
// ctx.fillStyle = "green"; // !
// ctx.fill();
// ctx.closePath();


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
// function Tree (color,draw,interval,xPos,yPos){
//   this.color = color;
//   this.draw = draw;
//   this.interval = interval;
//   this.xPos = xPos;
//   this.yPos = yPos;
// }

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

//cars ===============================

//MX-7
  // const img  = new Image();
  // img.src = "img/mx7.png";
  
  // img.onload = function () {
  //     ctx.drawImage(img,0,10, 200,100);
  // };

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

    
//     let img = new Image();
//     img.src = './images/car.png'
    
//     // img.onload = function (){      
//       ctx.drawImage(img, x, y, 50, 90);    
//     // }
//}

//   window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };




//   function obstacles(){
      
//     ctx.fillStyle="red";    
//     ctx.fillRect(firstPosition1, obstacleSpeed, 80, 20);
//     ctx.fillRect(firstPosition2, obstacleSpeed, 80, 20);
//     obstacleSpeed += 3;     
//     if(obstacleSpeed >= 550){
//       obstacleSpeed = 1;
//       firstPosition1 = randomObstacle();
//       firstPosition2 = randomObstacle() + 100;
//       crushX1 = firstPosition1;
//       crushX2 = firstPosition2;
//       console.log(crushX1, crushX2)
//     } 
//   }   




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



//tree solution
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

