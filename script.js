const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let timeReaction;
let x1 = 0;
let x2 = 0;
let x3 = 0;

//clear function
function clearCanvas() {
  ctx.clearRect(0,0,1400,400);
}

//objects===============================

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(30,50,50,50);

// ctx.fillStyle = "yellow";
// ctx.fillRect(30,200,50,50);

// ctx.fillStyle = "magenta";
// ctx.fillRect(30,250,50,50);

// ctx.beginPath();
// ctx.lineWidth ='5';
// ctx.strokeStyle = "white";
// ctx.setLineDash([17]);
// ctx.moveTo(0,150);
// ctx.lineTo(1400, 150);
// ctx.stroke();

// const img  = new Image();
// img.src = "./road texture.jpg";

// img.onload = function () {
//     ctx.drawImage(img,0,50, 1400,350);
// };


//trigger drag - maybe tree===============================

// function moveCPU(){
//   x1 += 10;
  
//   clearCanvas();
  
//   // ctx.fillStyle = "#FF0000";
//   // ctx.fillRect(30+x1,50,50,50);
//   // ctx.fillStyle = "yellow";
//   // ctx.fillRect(30+x2,200,50,50);
  
//   //dash line  
//   // ctx.beginPath();
//   // ctx.lineWidth ='5';
//   // ctx.strokeStyle = "white";
//   // ctx.setLineDash([17]);
//   // ctx.moveTo(0,150);
//   // ctx.lineTo(1400, 150);
//   // ctx.stroke();
  
//   window.requestAnimationFrame(moveCPU);
// }

let speed = document.getElementById('speedId');

// function movePlayer(){
//   x2 += 10.2;
  
//   // ctx.fillRect(30+x1,50,50,50);
//   // ctx.fillStyle = "yellow";
//   // ctx.fillRect(30+x2,200,50,50);
  
//   //dash line  
//   // ctx.beginPath();
//   // ctx.lineWidth ='5';
//   // ctx.strokeStyle = "white";
//   // ctx.setLineDash([17]);
//   // ctx.moveTo(0,150);
//   // ctx.lineTo(1400, 150);
//   // ctx.stroke();
  
//   speed.innerText = `${Math.floor(x2/5)} km/h`;
  
//   window.requestAnimationFrame(movePlayer);
// } clearCanvas();
  
  
 
//NEW ENGINE==========================================
let carOne = new Image();
let carTwo = new Image();
//let carThree = new Image();

function init() {
  carOne.src = './img/audi.png';
  carTwo.src = './img/taxi.png';
  // carThree.src = '';

  window.requestAnimationFrame(draw);
}


function draw() {
  x1 += 10;
  x2 += 10.2;


  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
  //ctx.drawImage(carThree, 100, 100, 150, 100);

  speed.innerText = `${Math.floor(x2/5)} km/h`;
  console.log(x1,x2);
  
  window.requestAnimationFrame(draw);
}
init();

//STOP THE SPEED================================================
// function stop (){
//   if(x1 === 1400 && x2 <1400) {
//     x1 === 0 && x2 === 0;
//     alert ('CPU win!');
//   } if (x2 === 1400 && x1 < 1400) {
//     alert ('Player win!');
//   }
// };

function shiftUp(){}
function nitro(){}



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

//circleRed = new Tree("red",600,40,2000);
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




//TIME REACTION=======================================
//dentro da tree
let startTime = new Date();
let endTime = new Date();
let responseTime;
let responsePhrase= "";

function reaction (){
  endTime = new Date();
  responseTime = (endTime.getTime() - startTime.getTime())/1000;
  console.log(responseTime);

	if (responseTime < 0.30)
		responsePhrase = "Well done The Flash!";
	else if (responseTime >= 0.30 && responseTime < 0.40)
		responsePhrase = "Good Job!";
	else if (responseTime >= 0.40 && responseTime < 0.60)
		responsePhrase = "Could be better...";
	else if (responseTime >= 0.60 && responseTime < 0.80)
		responsePhrase = "Keep practising!";
	else if (responseTime >= 0.80 && responseTime < 1)
		responsePhrase = "Have you been drinking?";
	else if (responseTime >= 1)
    responsePhrase="Did you fall asleep?";
    
  return document.getElementById('timeId').innerHTML = `reaction time: ${responseTime}seconds`,document.getElementById('responsePhrase').innerHTML = responsePhrase;
}



//tree solution?
// let foo = (function () {
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

// BACKGROUND MOVING
// let img = new Image();
// img.src = 'img/roadTexture.jpg';


// let backgroundImage = {
//   img: img,
//   x: 0,
//   speed: -2,

//   move: function() {
//     this.x += this.speed;
//     this.x %= canvas.width;
//   },

//   draw: function() {
//     ctx.drawImage(this.img, this.x, 0);
//     if (this.speed < 0) {
//       ctx.drawImage(this.img, this.x + canvas.width, 0);
//     } else {
//       ctx.drawImage(this.img, this.x - this.img.width, 0);
//     }
//   },
// };

// function updateCanvas() {
//   backgroundImage.move();

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   backgroundImage.draw();

//   requestAnimationFrame(updateCanvas);
// }

// // start calling updateCanvas once the image is loaded
// img.onload = updateCanvas;
