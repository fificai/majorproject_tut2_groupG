// Tut 2, Group G - Huihui Cai, Han Zhang and Anna Carter
// Creative Coding Major Project
// Chosen artwork: Piet Mondrian's 'Broadway Boogie Woogie'

// Create variables to hold values for buttons to play different music tracks on mouse press:
let song1;
let song2;
let song3;
let button1;
let button2;
let button3;

function preload() {
  song1 = loadSound('audio/pixabay_Musictown_funky-dance-pop-1-95460.mp3');
  song2 = loadSound('audio/pixabay_juliusH_big-apple-jazzy-piano-and-bass-music-13305.mp3');
  song3 = loadSound('audio/pixabay_grandproject_lady-of-the-80x27s-128379.mp3');
}

// Create variables to hold values for creating rectangles:
let number = 30;
let rectSpacing = 10;
const numberOfAqua = 8;
const blues = ['#08527d', '#1678A2', '#093169'];
const blues2 = ['#Bffbfd', '#083360', '#2a91a4'];

// Create arrays to store multiple classes of rectangles:
let rectangles = [];
let rectanglesBig = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position = (200, 200); // Position canvas

  // Create buttons to play different music:
  button1 = createButton("Take me to funkytown");
  button1.position(10, 10);
  button1.mousePressed(toggleFunkyMusic);

  function toggleFunkyMusic() {
    if (song1.isPlaying()) {
      song1.pause();
      button1.html("Keep playing!");
    } else {
      song1.play();
      song1.setVolume(0.3);
      button1.html("Pause");
    }
  }

  button2 = createButton("I'm feeling jazzy");
  button2.position(230, 10);
  button2.mousePressed(toggleJazzyMusic);

  function toggleJazzyMusic() {
    if (song2.isPlaying()) {
      song2.pause();
      button2.html("More jazz, please!");
    } else {
      song2.play();
      song2.setVolume(0.3);
      button2.html("Pause");
    }
  }

  button3 = createButton("I love the 80s!");
  button3.position(400, 10);
  button3.mousePressed(toggle1980Music);

  function toggle1980Music() {
    if (song3.isPlaying()) {
      song3.pause();
      button3.html("Play me again!");
    } else {
      song3.play();
      song3.setVolume(0.3);
      button3.html("Pause");
    }
  }

  background('#000a0c');
//the line will appear at random y position
// little rectangles will draw on the lines, so they have same y position 

  let y1 = random(0, 150);
  let y2 = y1;

  // Use width and height instead of windowWidth and windowHeight to create rectangles:

  // Upper four aqua lines (long, thin rectangles):
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(0, i * y1, width, 15, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }
  // Lower four horizontal aqua lines:
  for (let i = 0; i < 4; i++) {
    let aquaRectangle = new Rectangle(0, 250 + i * y1 * 2, width, 15, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }

  // Left three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(i * y1, 0, 15, height, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }
  // Right three vertical aqua lines:
  for (let i = 0; i < 3; i++) {
    let aquaRectangle = new Rectangle(250 + i * y1 * 2, 0, 15, height, '#Bffbfd');
    rectangles.push(aquaRectangle);
  }

  // Create small blocks positioned at random along the long, thin aqua rectangles:

  // 1
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(y2, i * (50 + rectSpacing), 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 2
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomBlue = blues[j % blues.length];
      let randomRectangle = new Rectangle(y2 + (1 * y1), j * (100 + rectSpacing), 15, 15, randomBlue);
      rectangles.push(randomRectangle);
    }
  }

  // 3
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomBlue = blues[i % blues.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 - y1 * 2, (i * (50 + rectSpacing)), 15, 15, randomBlue);
      rectangles.push(randomRectangle);
    }
  }
  // 4
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(250 + y1 * 2, i * (35 + rectSpacing), 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 5
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < number; i++) {
      const randomBlue = blues[i % blues.length];
      let randomRectangle = new Rectangle(250 + y1 * 2 + y1 * 2, (i * (80 + rectSpacing)), 15, 15, randomBlue);
      rectangles.push(randomRectangle);
    }
  }

  // 6
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomBlue = blues[i % blues.length];
      let randomRectangle = new Rectangle(i * (50 + rectSpacing), y1 - y1, 15, 15, randomBlue);
      rectangles.push(randomRectangle);
    }
  }
  // 7
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y2, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 8
  for (let j = 0; j < number; j++) {
    for (let i = 0; i < number; i++) {
      const randomBlue = blues[i % blues.length];
      let randomRectangle = new Rectangle(i * (60 + rectSpacing), y1 + y1, 15, 15, randomBlue);
      rectangles.push(randomRectangle);
    }
  }
  // 9
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), y1 + y1 + y1, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }

  // 10
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (60 + rectSpacing), 250, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 11
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (30 + rectSpacing), 250 + y1 * 2, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 12
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (50 + rectSpacing), 250 + y1 * 2 + y1 * 2, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }
  // 13
  for (let i = 0; i < number; i++) {
    const randomBlue = blues[i % blues.length];
    let randomRectangle = new Rectangle(i * (40 + rectSpacing), 250 + y1 * 2 + y1 * 2 + y1 * 2, 15, 15, randomBlue);
    rectangles.push(randomRectangle);
  }

  noStroke();

  for (let i = 0; i < 15; i++) {

    // Randomly generate the position, size and colour of block A:
    let x = random(width);
    let y = random(height);
    let widthA = random(30, 50);
    let heightA = random(30, 50);

    // Randomly generate the size of blocks B and C:
    let widthB = widthA - random(10, 20);
    let heightB = heightA - random(10, 20);
    let widthC = widthA + random(10, 20);
    let heightC = heightA + random(10, 20);

    // Randomly generate colours from blues2 array:

    let colorA = random(blues2);
    let colorB = random(blues2);
    let colorC = random(blues2);

    // Create a new block object and add it to an array:

    rectanglesBig.push(new Rectangle(x, y, widthC, heightC, colorC));
    rectanglesBig.push(new Rectangle(x, y, widthA, heightA, colorA));
    rectanglesBig.push(new Rectangle(x, y, widthB, heightB, colorB));

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  {
    background('#000a0c');
    // Draw rectangle:

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

/* References:
Styling
https://github.com/processing/p5.js/wiki/Beyond-the-canvas/5153b7ae243a8d685b511f8aaeca3bc8fa3ee0e8
Loading audio files
https://p5js.org/examples/sound-preload-soundfile.html
Buttons
https://www.youtube.com/watch?v=YcezEwOXun4 
https://p5js.org/reference/#/p5/createButton
https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
Inspiration
Blue Boogie by Paisley Cross, 4 October 2023, CC BY-NC-SA 3.0 DEED - code not copied or modified.
https://openprocessing.org/sketch/2030919
Audio
song1: 'Funky Dance Pop 1'. Music by Musictown on Pixabay.
song2: 'Big Apple - Jazzy Piano and Bass Music'. Music by JuliusH on Pixabay.
song3: 'Lady of the 80s'. Music by Grand_Project on Pixabay.
*/