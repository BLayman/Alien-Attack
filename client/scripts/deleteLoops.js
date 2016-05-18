//deletes array member when toDelete is true
function deleteLoops(aliens,missiles) {
  for (var i = aliens.length-1; i >= 0; i--) {
    if(aliens[i].toDelete === true){
      aliens.splice(i,1);
    }
  }

  for (var i = missiles.length-1; i >= 0; i--) {
    if(missiles[i].toDelete === true){
      missiles.splice(i,1);
    }
  }
}
