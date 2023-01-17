let sound = document.getElementById("gomo");
let play = document.getElementById("play");

play.onclick = function () {
  console.log("play");
  sound.play();
  return false;
};