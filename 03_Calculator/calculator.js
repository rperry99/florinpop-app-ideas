$(document).ready(function() {
  let action;
  let currentScreen = "";
  let number;
  let result;
  let firstNumber = true;

  //Each time a number button is pressed
  $(".num").click(function() {
    if (currentScreen.length < 8) {
      currentScreen += $(this).html();
      number = parseFloat(currentScreen);
      $("#screen").val(currentScreen);
    }
  });

  //Add a decimal
  $("#point").click(() => {
    if (!currentScreen.includes(".")) {
      currentScreen += ".";
      $("#screen").val(currentScreen);
    }
  });

  // When an operator button is pressed
  $(".operator").click(function() {
    let operator = $(this).attr("id");
    if (firstNumber === true) {
      result = number;
      currentScreen = "";
      $("#screen").val(result);
      firstNumber = false;
    } else {
      switch (operator) {
        case "plus":
          result += number;
          currentScreen = "";
          $("#screen").val(result);
          break;
        case "minus":
          result -= number;
          currentScreen = "";
          $("#screen").val(result);
          break;
        // case 'divide':
        // case 'product':
      }
    }
  });

  $("#equal").click(() => {});

  $("#inverse").click(() => {
    if (currentScreen != "") {
      let num = parseFloat(currentScreen);
      num *= -1;
      currentScreen = num.toString();
      $("#screen").val(currentScreen);
    }
  });
  $("#clear").click(() => {
    currentScreen = "";
    action = "";
    $("#screen").val(currentScreen);
  });
  $("#clearall").click(() => {
    currentScreen = "";
    number = 0;
    result = undefined;
    firstNumber = true;
    $("#screen").val(currentScreen);
  });
});

function calculate() {
  if (action === "plus") {
    result += number;
    action = "";
  } else if (action === "minus") {
    result -= number;
    action = "";
  }
  $("#screen").val(result);
}
