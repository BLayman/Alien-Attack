/*var p5 = require('./libraries/p5');
require("./p5.dom");
var drop = require('./scripts/drop');
var ship = require('./scripts/ship');
var flower = require('./scripts/flower');
*/
var loopOn = true;
var right;
var ship;
var loaded;
var drops = [];
var flowers = [];
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
  flowers = [];
  level = 2;
  ship.x = width/2;
  ship.y = height-40;
  tenFlowers();
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

//make flowers
tenFlowers();

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

dropLoop(drops,flowers);

flowerLoop(flowers);

deleteLoops(flowers,drops);

fail(ship,flowers);

success(flowers);

}



function keyPressed() {
  //fire water
    if (key === " " && loaded === true) {
      fire.play();
      var drop = new Drop(ship.x, ship.y);
      drops.push(drop);
      loaded = false;
      setTimeout(load,400);
}
}
