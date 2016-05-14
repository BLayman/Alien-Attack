function Ship() {
  this.x = width/2;
  this.y = height-40;

  this.show = function () {
    fill(179, 204, 255)
    triangle(this.x, this.y, this.x-15, height, this.x+15,height);
  }
  this.move = function (dir) {
    this.x += dir;
  }
}
