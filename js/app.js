const buttons = document.querySelectorAll(".button");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const palindrome = document.querySelector("#palindrome").value;
const display = document.querySelector(".screenText");

function checkPalindrome() {
  const reg = /[^A-Za-z0-9_]/g;
  const lowerCase = palindrome.toString().toLowerCase().replace(reg, "");
  const reverse = lowerCase.split("").reverse().join("");
  let result = lowerCase === reverse;

  return result.toString().toUpperCase();
}

if (!palindrome) {
} else {

  display.innerHTML = `${palindrome} is`;

  setTimeout(() => {
    display.innerHTML = "."
  }, 1000);
  setTimeout(() => {
    display.innerHTML = ".."
  }, 1700);
  setTimeout(() => {
    display.innerHTML = "..."
  }, 2400);
  
  setTimeout(() => {
  display.innerHTML = checkPalindrome() + "!"
  }, 3500);




  setTimeout(() => {
    display.innerHTML = "...another?";
    document.querySelector("form").reset();
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
  setTimeout(() => {
    window.location.reload();
  }, 16400);
}

submit.addEventListener("onmouseup", () => {
  window.location.reload();
});

buttons.forEach(button => {
  button.addEventListener("onmousedown", () => {
    button.style.backgroundColor = "rgb(59, 0, 10)";
  });
  button.addEventListener("onmouseup", () => {
    button.style.backgroundColor = "";
  });
});