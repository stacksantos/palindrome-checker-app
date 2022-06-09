const buttons = document.querySelectorAll(".button");
const check = document.querySelector("#check");
const reset = document.querySelector("#reset");
const input = document.querySelector("#input").value;
const display = document.querySelector(".screenText");

function buttonPress() {
  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "rgb(49, 0, 14)";
    });
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "rgb(101, 2, 29)";
    });
  });
}

buttonPress();

function checkButton() {
  check.addEventListener("mouseup", () => {
    const reg = /[^A-Za-z0-9_]/g;
    const lowerCase = input.toString().toLowerCase().replace(reg, "");
    const reverse = lowerCase.split("").reverse().join("");
    const results = lowerCase === reverse;

    display.innerHTML = results.toString().toUpperCase();
  });
}

checkButton();
