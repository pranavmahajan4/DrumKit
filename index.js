//document.querySelectorAll(".drum").addEventListener("click",justAFunction);
let numberOfButtons = document.querySelectorAll(".drum").length;
//console.log(numberOfButtons);

for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", justAFunction);
}

function justAFunction() {
  //this.style.color = "white";

  let buttonPressed = this.innerHTML;
  switch (buttonPressed) {
    case "d":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "r":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "u":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "m":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "i":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "t":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonPressed);

  }

  buttonAnimation(buttonPressed);
}

function buttonAnimation(buttonPressed) {
  let activeButton = document.querySelector("." + buttonPressed);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 2000);
}
