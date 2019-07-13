// function setup() {
//   var cnv = createCanvas(400, 400);
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
//   background(255, 0, 200);
// }

function preload() {
  img = loadImage('pixel-bezier/example.jpg');
}

function setup() {
  // Move the canvas so it’s inside our <div id="sketch-holder">.

  img.resize(width, 0);

  var canvasDiv = document.getElementById('sketchdiv')
  var width = canvasDiv.offsetWidth
  var height = img.height


  var cnv = createCanvas(width, height);
  cnv.parent('sketchdiv');


}

function draw() {
  image(img, 0, 0);
}

function mousePressed() {
  img.resize(width, 0);
}
