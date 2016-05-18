//shows and moves aliens
//triggers directions shift
function alienLoop(aliens) {

  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].invade();
    if (aliens[i].x > width-aliens[i].r || aliens[i].x < aliens[i].r){
      for (var i = 0; i < aliens.length; i++) {
        aliens[i].downSwitch();
    }
    }

  }

}
