//deletes array member when toDelete is true
function deleteLoops(flowers,drops) {
  for (var i = flowers.length-1; i >= 0; i--) {
    if(flowers[i].toDelete === true){
      flowers.splice(i,1);
    }
  }

  for (var i = drops.length-1; i >= 0; i--) {
    if(drops[i].toDelete === true){
      drops.splice(i,1);
    }
  }
}
