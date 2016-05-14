var level = 2;

function tenFlowers() {
  for (var i = 0; i < 10; i++) {
    flowers[i] = new Flower(i*45+12, 35);
  }
}

function twentyFlowers() {
  for (var i = 10; i < 20; i++) {
    flowers[i] = new Flower((i-10)*45+24, 70);
  }
}

function thirtyFlowers(bool) {
  clearInterval(oneInt);

  if (bool == true){
    themeOne.stop();
    themeTwo.play();
    twoInt = setInterval(playTwo, 5200);
  }

  for (var i = 20; i < 30; i++) {
    flowers[i] = new Flower((i-20)*45+12, 105);
  }
}
function fourtyFlowers(bool) {
  if (bool == true){
    clearInterval(twoInt);
    themeTwo.stop();
    themeThree.play();
      threeInt = setInterval(playThree, 5200);
  }

  for (var i = 30; i < 40; i++) {
    flowers[i] = new Flower((i-30)*45+24, 140);
  }
}

function gameOver() {
  createCanvas(600,400);
  background("black");
  fill("red");
  textSize(50);

stopAll();

  lose.play();
  text("Game Over",150,150);
  text("Earth is doomed.",100,250);
  loopOn = false;
  noLoop();
}
function nextLevel() {

 if (level === 2){
      level += 1;
    tenFlowers();
    twentyFlowers();
  }

  else if (level === 3){
    tenFlowers();
    twentyFlowers();
    thirtyFlowers(true);
    level += 1;
  }

  else if (level === 4){
    tenFlowers();
    twentyFlowers();
    thirtyFlowers(false);
    fourtyFlowers(true);
    level += 1;
  }

  else if (level === 5){
    tenFlowers();
    twentyFlowers();
    thirtyFlowers(false);
    fourtyFlowers(false);
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].xdir = 2.1;
    }
    level += 1;
  }

  else if (level === 6){
    createCanvas(600,400);
    background("white");
    fill("green");
    textSize(50);
    successTheme.play();
    text("You did it!",150,150);
    text("Earth is now safe.",100,250);
    stopAll();
    loopOn = false;
    noLoop();

  }

}

function fail(ship,flowers){
  for (var i = 0; i < flowers.length; i++) {
var distance = dist(ship.x, ship.y, flowers[i].x, flowers[i].y);
    if (distance < flowers[i].r || flowers[i].y > height){
      flowers[i].gone();
      gameOver();
    }
  }
}
function success(flowers) {
  if(flowers.length === 0){
    nextLevel();
  }
}
