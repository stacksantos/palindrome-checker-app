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
    display.innerHTML = "(o^-^o)";
  }, 4700);
  setTimeout(() => {
    display.innerHTML = "...another?";
    document.querySelector("input").value = "";
  }, 6000);

  function endDisplay() {
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o0-0o)";
      }
    }, 8500);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o^-^o)";
      }
    }, 8600);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o0-0o)";
      }
    }, 8700);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o^-^o)";
      }
    }, 11600);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o0-0o)";
      }
    }, 11700);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o^-^o)";
      }
    }, 11800);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o0-0o)";
      }
    }, 11900);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "Until next time then!";
      }
    }, 13000);
    setTimeout(() => {
      input.addEventListener("focusin", () => {
        cancel = true;
      });
      if (cancel === true) {
        display.innerHTML = "What's next?";
      } else {
        display.innerHTML = "(o^-^o)";
      }
    }, 14300);
  }

  if (cancel === false) {
    endDisplay();
  }
}


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
