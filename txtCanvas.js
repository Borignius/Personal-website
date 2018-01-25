var canvas  = document.querySelector('txt')
  ;
txt.width = window.innerWidth;
txt.height = window.innerHeight;

var b = txt.getContext('2d');

b.clearRect(0, 0, innerWidth, innerHeight);

window.addEventListener('resize', function() {
  txt.width = window.innerWidth;
  txt.height = window.innerHeight;
})

var image = new Image();
image.src = 'me2.jpg';

function wrapText(text, x, y, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = b.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > 550 && n > 0 || words[n] == '-->' ) {
        b.fillText(line, x - 240, y - 240);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    b.fillText(line, x - 240, y - 240)
  }


function drawTxt(txxt, x, y) {
  b.clearRect(0, 0, innerWidth, innerHeight)
  b.font = "15px Comic Sans MS";
  b.fillStyle = "rgb(199, 232, 243)";
  b.textAlign = "left";
  if (txxt == txt10){
    b.drawImage(image, x - 250, y - 55, 500, 300);
  }
  wrapText(txxt, x, y, 30);
}


function resetTxt() {
  b.clearRect(0, 0, innerWidth, innerHeight);
}
