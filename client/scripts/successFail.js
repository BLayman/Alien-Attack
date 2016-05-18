var level = 2;

function tenAliens() {
  for (var i = 0; i < 10; i++) {
    aliens[i] = new Alien(i*45+12, 35);
  }
}

function twentyAliens() {
  for (var i = 10; i < 20; i++) {
    aliens[i] = new Alien((i-10)*45+24, 70);
  }
}

function thirtyAliens(bool) {
  clearInterval(oneInt);

  if (bool == true){
    themeOne.stop();
    themeTwo.play();
    twoInt = setInterval(playTwo, 5200);
  }

  for (var i = 20; i < 30; i++) {
    aliens[i] = new Alien((i-20)*45+12, 105);
  }
}
function fourtyAliens(bool) {
  if (bool == true){
    clearInterval(twoInt);
    themeTwo.stop();
    themeThree.play();
      threeInt = setInterval(playThree, 5200);
  }

  for (var i = 30; i < 40; i++) {
    aliens[i] = new Alien((i-30)*45+24, 140);
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
    tenAliens();
    twentyAliens();
  }

  else if (level === 3){
    tenAliens();
    twentyAliens();
    thirtyAliens(true);
    level += 1;
  }

  else if (level === 4){
    tenAliens();
    twentyAliens();
    thirtyAliens(false);
    fourtyAliens(true);
    level += 1;
  }

  else if (level === 5){
    tenAliens();
    twentyAliens();
    thirtyAliens(false);
    fourtyAliens(false);
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].xdir = 2.1;
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

function fail(ship,aliens){
  for (var i = 0; i < aliens.length; i++) {
var distance = dist(ship.x, ship.y, aliens[i].x, aliens[i].y);
    if (distance < aliens[i].r || aliens[i].y > height){
      aliens[i].gone();
      gameOver();
    }
  }
}
function success(aliens) {
  if(aliens.length === 0){
    nextLevel();
  }
}
