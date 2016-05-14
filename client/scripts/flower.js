function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 12;
  this.toDelete = false;
  this.xdir = 1.7;
  this.red = 0;
  this.green = 255;
  this.blue = 0;

  this.downSwitch = function () {
    this.y += this.r*2;
    this.xdir *= -1;
  }


  this.show = function () {
    fill(this.red,this.green,this.blue);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  };

  this.gone = function () {
fill(255,255,0);
    ellipse(this.x, this.y, this.r*4, this.r*4);
    this.toDelete = true;
  };
  this.invade = function () {
    this.x += this.xdir;
  }
}
