// function setup() {
//   var cnv = createCanvas(400, 400);
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
//   background(255, 0, 200);
// }

function setup() {
  // Move the canvas so it’s inside our <div id="sketch-holder">.

  var canvasDiv = document.getElementById('sketchdiv')
  var width = canvasDiv.offsetWidth
  var height = 600

  var cnv = createCanvas(width, height);
  cnv.parent('sketchdiv');

  background(200, 200, 200);

  for (let i = 0; i < 100; i++) {
    let r = random(-50, 50);
    line(width/2, i, 50 + r, i);
  }
}

function draw() {

}
