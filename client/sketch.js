// author: Brett Layman
var loopOn = true;
var right;
var ship;
var loaded;
var missiles = [];
var aliens = [];
var oneInt;
var twoInt;
var threeInt;


function load () {
  loaded = true;
}


function startOver() {

  if (loopOn === false) {
      loop();
  }
  stopAll();
  aliens = [];
  level = 2;
  ship.x = width/2;
  ship.y = height-40;
  tenAliens();
  themeOne.play();
  oneInt = setInterval(playOne, 5200);
}


function finalLevel() {

  if (loopOn === false) {
      loop();
  }
    stopAll();
  level = 5;
  nextLevel();
  themeThree.play();
    threeInt = setInterval(playThree, 5200);

}



function preload() {
  fire = loadSound('./sounds/fire.ogg');
  explode = loadSound('./sounds/explode.ogg');
  lose = loadSound("./sounds/lose.ogg");
  themeOne = loadSound('./sounds/theme1.ogg');
  themeTwo = loadSound('./sounds/theme2.ogg');
  themeThree = loadSound('./sounds/theme3.ogg');
  successTheme = loadSound("./sounds/success.ogg")
  themeOne.setVolume(.5);
  successTheme.setVolume(.3);
}



function setup() {
  themeOne.play();
  oneInt = setInterval(playOne, 5200);
  loaded = true;
createCanvas(600,400);
button = createButton("Skip to final level");
button.position(220,410);
button.class('btn');
button.mousePressed(finalLevel);

reset = createButton("Start Over");
reset.position(250,450);
reset.class('btn');
reset.mousePressed(startOver);

//make ship
ship = new Ship();

//make aliens
tenAliens();

}


function draw() {

  background(0);
  ship.show();

  if (keyIsDown(RIGHT_ARROW)){
    ship.move(5);
  }
  if (keyIsDown(LEFT_ARROW)){
    ship.move(-5);
}

missileLoop(missiles,aliens);

alienLoop(aliens);

deleteLoops(aliens,missiles);

fail(ship,aliens);

success(aliens);

}



function keyPressed() {
  //fire water
    if (key === " " && loaded === true) {
      fire.play();
      var missile = new Missile(ship.x, ship.y);
      missiles.push(missile);
      loaded = false;
      setTimeout(load,400);
}
}
