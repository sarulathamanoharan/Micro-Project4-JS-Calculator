//As I return script tag inside the header tag(instead inside the body tag ), DOMContentLoaded function is used
document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".output");
  const buttons = document.querySelectorAll(".number");
  const resetButton = document.querySelector(".reset");
  const deleteButton = document.querySelector(".delete");

  // function to update the display value
  function updateDisplay(value) {
    display.value += value;
  }

  //callback function passed to foreach() method
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "=") {
        display.value = eval(display.value);
      } else {
        updateDisplay(button.textContent);
      }
    });
  });

  resetButton.addEventListener("click", function () {
    display.value = ""; // empty the display
  });

  deleteButton.addEventListener("click", function () {
    display.value = display.value.slice(0, -1); // which removes last character from the display
  });
});

const audio = new Audio();
audio.src = "./assests/single-classic-click.wav";
