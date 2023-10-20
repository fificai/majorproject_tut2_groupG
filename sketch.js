let numberOfBlue = 30;
let numberOfRed = 70;
let numberOfGrey = 70;
const numberOfyellow = 50;

let rectangles = [];
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
}

function draw() {
  background(255);
  // draw rectangle
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
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