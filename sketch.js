let numberOfBlue = 30;
let numberOfRed = 70;
let numberOfGrey = 70;
const numberOfyellow = 50;

let rectangles = [];
let rectanglesBig = [];
//arrays using to store multipe classes of rectangles
function setup() {
   resizeCanvas(windowWidth, windowHeight);
  // create groups of rectangles
  for(let i = 0; i< numberOfRed; i++){
  let redRectangle = new Rectangle(random(20,100), 20, 20, 20, 'red');
  rectangles.push(redRectangle);
  }
  rectangles.push(new Rectangle(200, 100, 20, 20, 'blue'));
  rectangles.push(new Rectangle(100, 50, 20,20, 'grey'));
  rectangles.push(new Rectangle(100, 250, 150,20, 'yellow'));
  noStroke();


   for (let i = 0; i < 15; i++) {
  //Randomly generate the position, size, and color of block a
     
     
     
    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);
  

    // Randomly generate the size of blocks b and c
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10,20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random (10,20);

    //Randomly generate colors
  
    let colorA = random(colors2);
    let colorB = random(colors2);
    let colorC = random(colors2);
  
    // Create a block object and add it to an array
    
   
    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
     rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));
   
   
}}



function draw() {
  background(255);
  // draw rectangle
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
  push();
    rectMode(CENTER);
  
  for (let i = 0; i < rectanglesBig.length; i++) {
    rectanglesBig[i].draw();
  
  }
  pop();
}

class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
