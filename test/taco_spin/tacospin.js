function setup() {
    createCanvas(400, 400);
  }
  let rotation = 1;
  let xPos = 0;
  
  function draw() {
    

    background(0, 200, 250);

    translate(xPos + width / 2, height / 2);
    rectMode(CENTER);
    fill(100)

    
    
    rotate(PI * rotation);
    rect(0, 0, 200, 100);
    

    rotation += 0.05;
    xPos += 1;
  }