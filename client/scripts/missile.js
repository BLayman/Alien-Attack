function Missile(x, y) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.toDelete = false;

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  };

  this.move = function () {
    this.y -= 5;

  };

  this.hits = function (alienObj) {
  var d = dist(this.x, this.y, alienObj.x, alienObj.y);
if (d < this.r + alienObj.r){
  return true;
} else{
  return false;
}
  };
  this.gone = function () {
    this.toDelete = true;
  }

}
