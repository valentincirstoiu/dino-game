const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 500);
  }
}
let dinoPlaying = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("click", function (ev) {
  jump();
});
const newFeature = function () {
  console.log("Weolcome!");
};
newFeature();
