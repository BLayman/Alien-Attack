//shows and moves flowers
//triggers directions shift
function flowerLoop(flowers) {

  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].invade();
    if (flowers[i].x > width-flowers[i].r || flowers[i].x < flowers[i].r){
      for (var i = 0; i < flowers.length; i++) {
        flowers[i].downSwitch();
    }
    }

  }

}
