var canvas = document.querySelector('bubbles')
  ;
bubbles.width = window.innerWidth;
bubbles.height = window.innerHeight;

var c = bubbles.getContext('2d');

function distance(x1, y1, x2, y2){
  let xDistance = x2 - x1;
  let yDistance = y2 - y1

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

var mouse ={
  x: undefined,
  y: undefined
}

var maxRadius = 350;

var txt1 = document.getElementById('txt1').textContent
var txt2 = document.getElementById('txt2').textContent
var txt3 = document.getElementById('txt3').textContent
var txt4 = document.getElementById('txt4').textContent
var txt5 = document.getElementById('txt5').textContent
var txt6 = document.getElementById('txt6').textContent
var txt7 = document.getElementById('txt7').textContent
var txt8 = document.getElementById('txt8').textContent
var txt9 = document.getElementById('txt9').textContent
var txt10 = document.getElementById('txt10').textContent

window.addEventListener('click',
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
},)

window.addEventListener('resize', function() {
  bubbles.width = window.innerWidth;
  bubbles.height = window.innerHeight;
  init();
})

function Circle(x, y, dx, dy, radius, hue, txxt){
  this.txxt = txxt;
  this.x = x;
  this.y = y;
  this.dx = 0;
  this.dy = 0;
  this.radius = radius;
  this.hue = hue;
  this.minRadius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.hue;
    c.stroke();
    c.fillStyle = this.hue;
    c.fill();
  }

  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
    }
    // if (this.x + this.radius > radius) {
    //       this.dx = -this.dx;
    // }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
    }
    // if (this.y + this.radius > radius) {
    //       this.dy = -this.dy;
    // }
    this.x += this.dx;
    this.y += this.dy;

    if (this.radius > maxRadius -5){
      this.text = drawTxt(this.txxt, this.x, this.y)
    }
    //interactivity
    if (mouse.x - this.x < 15 && mouse.x - this.x > -15 && mouse.y - this.y < 15 && mouse.y - this.y > -15){
      this.dy = 0;
      this.dx = 0;
      if (this.radius < maxRadius) {
          this.radius += 2.5;
        }
    } else if (this.radius > this.minRadius) {
      this.radius -= 3;
      this.dy = (Math.random() - 0.5) * 3;
      this.dx = (Math.random() - 0.5) * 3;
      resetTxt();
    }

    this.draw();
  }

}

var biographycircle = [];
var goalcircle1 = [];
var goalcircle2 = [];
var goalcircle3 = [];
var meetupcircle1 = [];
var meetupcircle2 = [];
var meetupcircle3 = [];
var learntolearn1 = [];
var learntolearn2 = [];
var learntolearn3 = [];
var circles = [biographycircle, goalcircle1, goalcircle2, goalcircle3, meetupcircle1, meetupcircle2, meetupcircle3, learntolearn1, learntolearn2, learntolearn3];

function init(){
  circles = [biographycircle, goalcircle1, goalcircle2, goalcircle3, meetupcircle1, meetupcircle2, meetupcircle3, learntolearn1, learntolearn2, learntolearn3];
  goalcircle1 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt2;
    var radius = 30;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(244, 96, 54)'; //orande


      for (let j = 0; j < goalcircle1.length; j++){
        console.log('hi3213')
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          console.log('hi')
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }


    goalcircle1.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  goalcircle2 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt3;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(244, 96, 54)';

      for (let j = 0; j < goalcircle2.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    goalcircle2.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  goalcircle3 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt4;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(244, 96, 54)';

      for (let j = 0; j < goalcircle3.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    goalcircle3.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  meetupcircle1 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt5;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(27, 153, 139)'; //green

      for (let j = 0; j < meetupcircle1.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    meetupcircle1.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  meetupcircle2 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt6;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(27, 153, 139)';

      for (let j = 0; j < meetupcircle2.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    meetupcircle2.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  meetupcircle3 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt7;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(27, 153, 139)';

      for (let j = 0; j < meetupcircle3.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    meetupcircle3.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  learntolearn1 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt8;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(2, 169, 234)'; //blue

      for (let j = 0; j < learntolearn1.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    learntolearn1.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  learntolearn2 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt9;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(2, 169, 234)';

      for (let j = 0; j < learntolearn2.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    learntolearn2.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  learntolearn3 = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt10;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(2, 169, 234)';

      for (let j = 0; j < learntolearn3.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }

    learntolearn3.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
  biographycircle = [];
  for (var i = 0; i < 1; i++){
    var txxt = txt1;
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var hue = 'rgb(13, 27, 30)';
    for (let j = 0; j < biographycircle.length; j++){
        if (distance(x, y, circles[j].x, circles[j].y)- radius * 2 < 0){
          x = Math.random() * (window.innerWidth - radius * 2) + radius;
          y = Math.random() * (window.innerHeight - radius * 2) + radius;

          j = -1;
        }
      }
    biographycircle.push(new Circle(x, y, dx, dy, radius, hue, txxt));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < goalcircle1.length; i++) {
      goalcircle1[i].update();
    }
    for (var i = 0; i < goalcircle2.length; i++) {
      goalcircle2[i].update();
    }
    for (var i = 0; i < goalcircle3.length; i++) {
      goalcircle3[i].update();
    }
    for (var i = 0; i < meetupcircle1.length; i++) {
      meetupcircle1[i].update();
    }
    for (var i = 0; i < meetupcircle2.length; i++) {
      meetupcircle2[i].update();
    }
    for (var i = 0; i < meetupcircle3.length; i++) {
      meetupcircle3[i].update();
    }
    for (var i = 0; i < learntolearn1.length; i++) {
      learntolearn1[i].update();
    }
    for (var i = 0; i < learntolearn2.length; i++) {
      learntolearn2[i].update();
    }
    for (var i = 0; i < learntolearn3.length; i++) {
      learntolearn3[i].update();
    }
    for (var i = 0; i < biographycircle.length; i++) {
      biographycircle[i].update();
    }
}

init();
animate();
// rgb(199, 232, 243) text colour
// rgb(244, 96, 54) goalcircle
// rgb(27, 153, 139) meetupcircle
// rgb(2, 169, 234) learntolearn
// rgb(13, 27, 30) biocircle
