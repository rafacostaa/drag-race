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

//ENGINE==========================================
let carOne = new Image();
let carTwo = new Image();
//let carThree = new Image();

let speed = document.getElementById('speedId');

function draw() {
  carOne.src = './img/audi.png';
  carTwo.src = './img/taxi.png';
  
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
  
  window.requestAnimationFrame(draw);
}

function moveCPU() {
  if(x1 === 1400 && x2 <1400) {
    alert ('CPU win!');
  }
  
  carOne.src = './img/audi.png';
  carTwo.src = './img/taxi.png';
  
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  x1 += 10;
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
  
  window.requestAnimationFrame(moveCPU);
}

function movePlayer() {
  if (x2 === 1400 && x1 < 1400) {
    alert ('Player win!');
  }
  carOne.src = './img/audi.png';
  carTwo.src = './img/taxi.png';
      
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  x2 += 10;
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
  console.log(x2);
    
  speed.innerText = `${Math.floor(x2/5)} km/h`;
  window.requestAnimationFrame(movePlayer);
}

draw();



function nitro(){}


//set functions to keyboard keys===============================
window.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 32) { //key space
    movePlayer();
    reaction();
    
  }else if (event.isComposing || event.keyCode === 78) { //key N
    nitro();
  }
}, false);


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


//LIGHT==========================================================================================
document.getElementById('start-button').addEventListener("click", startGame);
let lightsStart = document.getElementsByClassName('light');
let startOff = document.getElementsByClassName('startLight')

function startGame() {
  setInterval( function redLight(){
    lightsStart[0].classList.add("on");
  },1000);
  
  setInterval( function yellowLight(){
    lightsStart[1].classList.add("on");
  },2000);
  
  setInterval( function greenLight(){
    lightsStart[2].classList.add("on");
    moveCPU();
  },3000);
  
  // setInterval( function startLight(){
    //   startOff.style.display = "none";
    // },5000);
    
  }
  
  
  // BACKGROUND MOVING========================================================
  
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
              
              
              
    