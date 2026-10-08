// select all buttons with class drum
const drumButtons = document.querySelectorAll(".drum");
// Detecting keyboard press and playing sound
const audioW = new Audio("sounds/tom-1.mp3");
const audioA = new Audio("sounds/tom-2.mp3");
const audioS = new Audio("sounds/tom-3.mp3");
const audioD = new Audio("sounds/tom-4.mp3");
const audioJ = new Audio("sounds/snare.mp3");
const audioK = new Audio("sounds/crash.mp3");
const audioL = new Audio("sounds/kick-bass.mp3");

window.addEventListener("keydown", playSound);

//  Function to play sound
function playSound(event) {
  const key = event.key;
  if (key === "w") {
    audioW.currentTime = 0; // Rewind to start to allow sound overlapping
    audioW.play();
    animateButton(key);
  } else if (key === "a") {
    audioA.currentTime = 0;
    audioA.play();
    animateButton(key);
  } else if (key === "s") {
    audioS.currentTime = 0;
    audioS.play();
    animateButton(key);
  } else if (key === "d") {
    audioD.currentTime = 0;
    audioD.play();
    animateButton(key);
  } else if (key === "j") {
    audioJ.currentTime = 0;
    audioJ.play();
    animateButton(key);
  } else if (key === "k") {
    audioK.currentTime = 0;
    audioK.play();
    animateButton(key);
  } else if (key === "l") {
    audioL.currentTime = 0;
    audioL.play();
    animateButton(key);
  }
}
// Function to animate button
function animateButton(key) {
  const button = document.querySelector(`.${key}`);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200); // 200ms animation duration
}
