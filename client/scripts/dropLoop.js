//shows and moves drops
//triggers drop/flower collision
function dropLoop(drops,flowers) {
  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if(drops[i].hits(flowers[j])){
        explode.play();
        flowers[j].gone();
        drops[i].gone();
      }
    }
  }
}
