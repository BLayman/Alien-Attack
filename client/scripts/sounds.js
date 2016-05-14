function playOne() {
  themeOne.play();
}

function playTwo() {
  themeTwo.play();
}

function playThree() {
  themeThree.play();
}

function stopAll() {
  clearInterval(oneInt);
  themeOne.stop();
  clearInterval(twoInt);
  themeTwo.stop();
  clearInterval(threeInt);
  themeThree.stop();

}
