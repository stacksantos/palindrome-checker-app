const buttons = document.querySelectorAll(".button");
const submit = document.querySelector("#submit");
// const reset = document.querySelector("#reset");
const display = document.querySelector("output");
let palindrome = document.querySelector("input").value;

display.innerHTML = "PALINDROME<br>CHECKER";

function checkPalindrome() {
  const reg = /[^A-Za-z0-9_]/g;
  let palindrome = document.querySelector("input").value;
  const lowerCase = palindrome.toString().toLowerCase().replace(reg, "");
  const reverse = lowerCase.split("").reverse().join("");
  const result = lowerCase === reverse;

  return result;
}

function displayResult() {
  submit.addEventListener("mouseup", () => {
    let palindrome = document.querySelector("input").value;

    if (!palindrome) {
      display.innerHTML = "You forgot<br> something...";
    } else {
      display.innerHTML = `${palindrome} is`;

      setTimeout(() => {
        display.innerHTML = ".";
      }, 1000);
      setTimeout(() => {
        display.innerHTML = "..";
      }, 1700);
      setTimeout(() => {
        display.innerHTML = "...";
      }, 2400);

      setTimeout(() => {
        display.innerHTML = `${checkPalindrome().toString().toUpperCase()}!`;
      }, 3500);

      setTimeout(() => {
        display.innerHTML = "...another?";
        document.querySelector("input").value = "";
      }, 5200);

      setTimeout(() => {
        display.innerHTML = "0_0";
      }, 6700);

      setTimeout(() => {
        display.innerHTML = "-_-";
      }, 6800);

      setTimeout(() => {
        display.innerHTML = "0_0";
      }, 6900);

      setTimeout(() => {
        display.innerHTML = "-_-";
      }, 9600);

      setTimeout(() => {
        display.innerHTML = "0_0";
      }, 9700);

      setTimeout(() => {
        display.innerHTML = "-_-";
      }, 9800);

      setTimeout(() => {
        display.innerHTML = "0_0";
      }, 9900);

      setTimeout(() => {
        display.innerHTML = "Until next time then!";
      }, 13000);

      setTimeout(() => {
        display.innerHTML = "^-^";
      }, 15300);
    }
  });
}
displayResult();

function buttonColor() {
  submit.addEventListener("mousedown", () => {
    submit.style.backgroundColor = "rgb(59, 0, 10)";
  });
  submit.addEventListener("mouseup", () => {
    submit.style.backgroundColor = "";
  });
}
buttonColor();
