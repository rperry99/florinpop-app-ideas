const output = document.getElementById("output");
const input = document.getElementById("binary");
let userInput = "";
let regex = /([2-9])/g;

function generateBinary() {
  if (input.value === "") {
    input.style.borderColor = "red";
    input.focus();
    output.innerHTML = "Please enter any number of 1s and 0s only.";
  } else {
    input.style.borderColor = "#695858";
    userInput = input.value;
    if (!regex.test(userInput)) {
      //This is where the magic happens
      let numArr = userInput.split("");
      let strArr = [];
      let decimal = 0;
      let multiplyNumber = 1;
      for (let i = 0; i < numArr.length - 1; i++) {
        multiplyNumber *= 2;
      }
      for (let i = 0; i < numArr.length; i++) {
        let tempNum = parseInt(numArr[i]);
        if (tempNum === 1) {
          decimal += multiplyNumber;
        }
        multiplyNumber /= 2;
      }
      output.innerHTML = decimal;
    } else {
      input.style.borderColor = "red";
      input.focus();
      input.value = "";
      output.innerHTML = "Please enter any number of 1s and 0s only.";
    }
  }
}
