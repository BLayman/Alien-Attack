//shows and moves missiles
//triggers missile/alien collision
function missileLoop(missiles,aliens) {
  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
    missiles[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if(missiles[i].hits(aliens[j])){
        explode.play();
        aliens[j].gone();
        missiles[i].gone();
      }
    }
  }
}
