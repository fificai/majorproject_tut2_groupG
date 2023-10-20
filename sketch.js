let number = 30;
let rectSpacing = 10;
const numberOfyellow = 8;
const colors = ['#f0f0eb', '#4468bc', '#a4362a'];

let rectangles = [];
//arrays using to store multipe classes of rectangles

function setup() {
   resizeCanvas(500, 500);
    background('#f2f3ee');

//yellow lines
for (let i = 0; i < numberOfyellow; i++) {
let yellowRectangle = new Rectangle(0, i * (100 + rectSpacing), 500, 15, '#e9d22b');
  rectangles.push(yellowRectangle);
}
   
for (let i = 0; i < 3; i++) {
let yellowRectangle = new Rectangle(0, i * (80 + rectSpacing), 500, 15, '#e9d22b');
  rectangles.push(yellowRectangle);
}
   
for (let i = 0; i < 3; i++) {
let yellowRectangle = new Rectangle( 0,400+(i * (70 + rectSpacing)), 500, 15, '#e9d22b');
  rectangles.push(yellowRectangle);}
   
for (let i = 0; i < 3; i++) {
let yellowRectangle = new Rectangle( i * (40 + rectSpacing), 0, 15, 500, '#e9d22b');
  rectangles.push(yellowRectangle);}

for (let i = 0; i < 3; i++) {
let yellowRectangle = new Rectangle( 400+(i * (20 + rectSpacing)), 0, 15, 500, '#e9d22b');
  rectangles.push(yellowRectangle);}   

//random squares
  
//line 8
for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
let randomRectangle = new Rectangle(i * (40 + rectSpacing), 90, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
//line 13
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
let randomRectangle = new Rectangle(i * (40 + rectSpacing), 400, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
//line10
 for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
let randomRectangle = new Rectangle(i * (30 + rectSpacing), 180, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
//line15 
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
let randomRectangle = new Rectangle(i * (30 + rectSpacing), 480, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
//line5
 for (let i = 0; i < number; i++) {
     const randomColor = colors[i % colors.length];
 let randomRectangle = new Rectangle(430, i * (35 + rectSpacing), 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
//line6
  for (let i = 0; i < number; i++) {
     const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(460,(i * (100 + rectSpacing)), 15, 15, randomColor);
     rectangles.push(randomRectangle);
  }
  //2
  for (let i = 0; i < number; i++) {
        const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(50, i * (100 + rectSpacing), 15, 15, randomColor);
     rectangles.push(randomRectangle);
  }
  //3
  for (let i = 0; i < number; i++) {
     const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(100, i * (100 + rectSpacing), 15, 15, randomColor);
     rectangles.push(randomRectangle);
  }
  //4
       for (let i = 0; i < number; i++) {
         const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(400, i * (100 + rectSpacing), 15, 15, randomColor);
     rectangles.push(randomRectangle);
  }
  //11
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(i * (50 + rectSpacing), 220, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
  //12
 for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
 let randomRectangle = new Rectangle(i * (30 + rectSpacing), 330, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
  //7
  for (let i = 0; i < number; i++) {
    const randomColor = colors[i % colors.length];
  let randomRectangle = new Rectangle(i * (30 + rectSpacing), 0, 15, 15, randomColor);
  rectangles.push(randomRectangle);
}
  noStroke();
}

  function draw() {
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
