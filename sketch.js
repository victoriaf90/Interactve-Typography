var slider2, slider3, slider4;

var slider1;
var angle_rotate = 0;
var rotation_speed = 1;

function setup(){
  // ...create the canvas
  createCanvas(windowWidth, windowHeight);
    
  // ...creating the sliders
  slider1 = createSlider(0, 50, 1, 0.01);
  slider1.position(10, 10);
  slider1.style('width', '100px');
  
   // ...creating the sliders
  slider2 = createSlider(0, 255, 0);
  slider2.position(10, 30);

	slider3 = createSlider(0, 255, 0);
  slider3.position(10, 50);

	slider4 = createSlider(0, 255, 0);
  slider4.position(10, 70);
}




function draw(){
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(radians(angle_rotate * slider1.value()));
  textFont('Avenir');
  textStyle(BOLD);
  textSize(200);
  fill(0, 0, 0);
  clear();
  textAlign(CENTER, CENTER);
  // text('Hello', 0, -200);
  // text('Hello', 0, -100);
  text('Hello', 0, 0);
  // text('Hello', 0, 100);
  // text('Hello', 0, 200);
  pop();
  angle_rotate += 0.25;
}