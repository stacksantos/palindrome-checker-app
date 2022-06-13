const buttons = document.querySelectorAll(".button");
const submit = document.querySelector("#submit");
// const reset = document.querySelector("#reset");
const display = document.querySelector("output");
let palindrome = document.querySelector("input").value;
const input = document.querySelector("input");

// Start screen
display.innerHTML = "POCKET<br>PALINDROME";

// first input listener
input.addEventListener("focusin", () => {
  input.placeholder = "";
});
input.addEventListener("focusout", () => {
  input.placeholder = "Insert Palindrome";
});

// palindrome algorithm
function checkPalindrome() {
  const reg = /[^A-Za-z0-9_]/g;
  let palindrome = document.querySelector("input").value;
  const lowerCase = palindrome.toString().toLowerCase().replace(reg, "");
  const reverse = lowerCase.split("").reverse().join("");
  const result = lowerCase === reverse;

  return result;
}

// first text to display
function initialDisplay() {
  let palindrome = document.querySelector("input").value;
  let cancel = false;
  let done = true;

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

  function endDisplay() {
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "0_0";
      }
    }, 6700);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "-_-";
      }
    }, 6800);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "0_0";
      }
    }, 6900);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "-_-";
      }
    }, 9600);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "0_0";
      }
    }, 9700);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "-_-";
      }
    }, 9800);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "0_0";
      }
    }, 9900);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "Until next time then!";
      }
    }, 11000);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });

      if ((cancel === true)) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "^-^";
      }
    }, 13300);
  }

  if (cancel === false) {
    endDisplay();
  }
}

// second text after continue

// display results function
function displayResult() {
  submit.addEventListener("mouseup", () => {
    let palindrome = document.querySelector("input").value;

    if (!palindrome) {
      display.innerHTML = "You forgot<br> something...";
    } else {
      initialDisplay();
    }
  });
}
displayResult();

// button color changer
function buttonColor() {
  submit.addEventListener("mousedown", () => {
    submit.style.backgroundColor = "rgb(59, 0, 10)";
  });
  submit.addEventListener("mouseup", () => {
    submit.style.backgroundColor = "";
  });
}

buttonColor();
