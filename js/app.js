const buttons = document.querySelectorAll(".button");
const check = document.querySelector("#check");
const reset = document.querySelector("#reset");
const input = document.querySelector("#input").value;
const display = document.querySelector(".screenText");

function checkButton() {
  check.addEventListener("mouseup", () => {
    const reg = /[^A-Za-z0-9_]/g;
    const lowerCase = input.toString().toLowerCase().replace(reg, "");
    const reverse = lowerCase.split("").reverse().join("");

    function checkResults() {
      return (lowerCase === reverse)
      }
    
      if (!input) {
        display.innerHTML = "uhh...no?"

      } else {
        display.innerHTML = checkResults().toString().toUpperCase();
      }
      
    localStorage.clear();
  });
}

checkButton();


function buttonPress() {
  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "rgb(49, 0, 14)";
    });
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "";
    });
  });
}

buttonPress();

function resetApp() {
  reset.addEventListener("mouseup", () => {
    display.innerHTML = "TRY<br>ANOTHER";
    setTimeout(() => {
      location.reload();
      document.querySelector("form").reset();
      location.reload();
      localStorage.clear();
    sessionStorage.clear()
    ;
    }, 1300);  
  })
}

resetApp()
