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
let carThree = new Image();
//let carThree = new Image();

let speed = document.getElementById('speedId');


let requestAnimationFrame = window.requestAnimationFrame;
let cancelAnimationFrame = window.cancelAnimationFrame;
let myReq;

function draw() {
  carOne.src = './img/porsche.png';
  carTwo.src = './img/subaru.png';
  // carThree.src = './img/police.png';
  
  
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 150);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 150);
  // ctx.drawImage(carThree, -100 + x2, 115, 150, 170);
  
  myReq = requestAnimationFrame(draw);
}

function moveCPU() {
  if(x1 === 1400 && x2 <1400) {
    alert ('CPU win!');
  }
  
  carOne.src = './img/porsche.png';
  carTwo.src = './img/subaru.png';
  // carThree.src = './img/police.png';
  
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  x1 += 10;
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
  // ctx.drawImage(carThree, -100 + x2, 115, 150, 170);
  
  
  myReq = requestAnimationFrame(moveCPU);
}

function movePlayer() {
  if (x2 === 1400 && x1 < 1400) {
    alert ('Player win!');
  }
  carOne.src = './img/porsche.png';
  carTwo.src = './img/subaru.png';
  // carThree.src = './img/police.png';
  
  ctx.clearRect(0, 0, 1400, 400); // clear canvas
  x2 += 10;
  
  //cars
  ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
  ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
 // ctx.drawImage(carThree, -100 + x2, 115, 150, 170);

  //console.log(x2);
    
  speed.innerText = `${Math.floor(x2/5)} km/h`;
  myReq = requestAnimationFrame(movePlayer);
}
     
draw();

// NITRO=============================================
// function nitro(){}

//set functions to keyboard keys===============================
window.addEventListener("keydown", event => {
  if (event.keyCode === 32) { //key space
    movePlayer();
    reaction();
    audioStartCarRun();
    removeKeyDown();
    console.log(event.keyCode);

  }else if (event.keyCode === 78) { //key N
    nitro();
  }
}, false);

function removeKeyDown (){
window.removeEventListener('keydown', event => {
  if (event.keyCode === 32) { //key space
    movePlayer();
    reaction();
    audioStartCarRun();
  }else if (event.keyCode === 78) { //key N
    nitro();
  }
}, false);
}


//TIME REACTION=======================================
//dentro da tree
let startTime, endTime, responseTime;
let responsePhrase= "";

function reaction (){
  endTime = Date.now();
  responseTime = (endTime - startTime)/1000;
  //console.log(typeof responseTime,responseTime);
  if(!responseTime) {
    alert ('You lose');
    cancelAnimationFrame(myReq);   
  }
  
  if (responseTime < 0.2)
  responsePhrase = "Well done The Flash!";
  else if (responseTime >= 0.20 && responseTime < 0.30)
  responsePhrase = "Good Job!";
  else if (responseTime >= 0.30 && responseTime < 0.40)
  responsePhrase = "Could be better...";
  else if (responseTime >= 0.40 && responseTime < 0.60)
  responsePhrase = "Keep practising!";
  else if (responseTime >= 0.60 && responseTime < 1)
  responsePhrase = "Have you been drinking?";
  else if (responseTime >= 1)
  responsePhrase="Did you fall asleep?";
  
  return document.getElementById('timeId').innerHTML = `reaction time: ${responseTime}seconds`,
  document.getElementById('responsePhrase').innerHTML = responsePhrase;
}


//LIGHT==========================================================================================
let lightsStart = document.getElementsByClassName('light');
let startOff = document.getElementsByClassName('startLight')

function startGame() {
  
  audioStartCarPre();

  setTimeout( function redLight(){
    audioStart()
    lightsStart[0].classList.add('on');
  },2000);

  setTimeout( function yellowLight(){
    audioStart()
  lightsStart[1].classList.add('on');
  },4000);

  setTimeout( function greenLight(){
  lightsStart[2].classList.add('on');
  audioStartTwo();
  moveCPU();
  startTime = Date.now();

  },6000); 
}

            
//MODAL==========================================              
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// AUDIO==================================================

function audioStart(){
  let audioOne= document.getElementById("audio-one");
  audioOne.play();
}

function audioStartTwo(){
  let audioTwo= document.getElementById("audio-two");
  audioTwo.play();
}

function audioStartCarPre(){
  let audioThree= document.getElementById("audio-three");
  audioThree.play();
}

function audioStartCarRun(){
  let audioFour= document.getElementById("audio-four");
  audioFour.play();
}


// let random = Math.floor(Math.random()*100);
// console.log(random);

// function randomPolice (){
//   if(random < 50) {
//     function police() {
//     // if (x2 === 1400 && x1 < 1400) {
//     //   alert ('Player win!');
//     // }
//     carOne.src = './img/porsche.png';
//     carTwo.src = './img/subaru.png';
//     carThree.src = './img/police.png';

//     ctx.clearRect(0, 0, 1400, 400); // clear canvas
//     //x3 += 10;

//     //cars
//     ctx.drawImage(carOne, 0 + x1, 10, 140, 160);
//     ctx.drawImage(carTwo, 0 + x2, 210, 140, 160);
//     ctx.drawImage(carThree, -100 + x2, 115, 150, 170);
//     //console.log(x2);

//     myReq = requestAnimationFrame(police);
//     }
//   } else
//   return
