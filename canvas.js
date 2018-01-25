var canvas = document.querySelector('bubbles');
bubbles.width = window.innerWidth;
bubbles.height = window.innerHeight;

var c = bubbles.getContext('2d');

function distance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

function resolveCollision(thisCircle, otherCircle) {
  const xVelocityDiff = thisCircle.velocity.x - otherCircle.velocity.x;
  const yVelocityDiff = thisCircle.velocity.y - otherCircle.velocity.y;

  const xDist = otherCircle.x - thisCircle.x;
  const yDist = otherCircle.y - thisCircle.y;

  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {


    const angle = -Math.atan2(otherCircle.y - thisCircle.y, otherCircle.x - thisCircle.x);


    const m1 = thisCircle.mass;
    const m2 = otherCircle.mass;


    const u1 = rotate(thisCircle.velocity, angle);
    const u2 = rotate(otherCircle.velocity, angle);

    const v1 = {
      x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
      y: u1.y
    };
    const v2 = {
      x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
      y: u2.y
    };

    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    thisCircle.velocity.x = vFinal1.x;
    thisCircle.velocity.y = vFinal1.y;

    otherCircle.velocity.x = vFinal2.x;
    otherCircle.velocity.y = vFinal2.y;
  }
}

var circles = [];
var mouse = {
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
var txxxt = [txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10]

window.addEventListener('click',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  }, )

window.addEventListener('resize', function() {
  bubbles.width = window.innerWidth;
  bubbles.height = window.innerHeight;
  init();
})

function Circle(x, y, radius, hue, txxt) {
  this.txxt = txxt;
  this.x = x;
  this.y = y;
  this.velocity = {
    x: ((Math.random() - 0.5) * 3),
    y: ((Math.random() - 0.5) * 3)
  }
  this.radius = radius;
  this.hue = hue;
  this.minRadius = radius;
  this.mass = 1;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.hue;
    c.stroke();
    c.fillStyle = this.hue;
    c.fill();
  }

  this.update = function(circles) {

    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    for (let i = 0; i < circles.length; i++) {
      if (this === circles[i]) continue;
      if (distance(this.x, this.y, circles[i].x, circles[i].y) - radius * 2 < 0) {
        resolveCollision(this, circles[i])
      }

    }
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }


    if (this.radius > maxRadius - 5) {
      this.text = drawTxt(this.txxt, this.x, this.y)
    }

    if (mouse.x - this.x < 15 && mouse.x - this.x > -15 && mouse.y - this.y < 15 && mouse.y - this.y > -15) {
      this.velocity.x = 0;
      this.velocity.y = 0;
      if (this.radius < maxRadius) {
        this.radius += 2.5;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 3;
      this.velocity = {
        x: ((Math.random() - 0.5) * 3),
        y: ((Math.random() - 0.5) * 3)
      }
      resetTxt();
    }


  }

}

// rgb(199, 232, 243) text colour
var oj = 'rgb(244, 96, 54)' //goalcircle
var gr = 'rgb(27, 153, 139)' //meetupcircle
var bl = 'rgb(2, 169, 234)' // learntolearn
var bk = 'rgb(13, 27, 30)' //biocircle

var colours = [oj, oj, oj, gr, gr, gr, bl, bl, bl, bk]

function init() {
  circles = [];
  for (var i = 0; i < 10; i++) {
    var txxt = txxxt[i];
    var radius = 30;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var hue = colours[i];
    if (i != 0) {
      for (let j = 0; j < circles.length; j++) {
        if (distance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
          x = Math.random() * innerWidth;
          x = Math.random() * innerHeight

          j = -1;
        }
      }
    }
    circles.push(new Circle(x, y, radius, hue, txxt));
  }
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circles.length; i++) {
    circles[i].update(circles);
  }
}

init();
animate();
