// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    // function handleClick() {

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard press

// pass in parameter when function is triggered, let us tap into the event that triggered the event listener
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/sun.m4a");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/si.m4a");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/so.m4a");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/yun.m4a");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/young.m4a");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/jack.m4a");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kw.m4a");
      kick.play();
      break;
    default:
      console.log();
      break;
  }
}

// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
