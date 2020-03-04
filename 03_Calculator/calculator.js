$(document).ready(function() {
  let currentScreen = "";
  let pastOperator;
  let currentOperator;
  let total;
  let firstOperation = true;

  //Each time a number button is pressed
  $(".num").click(function() {
    if (currentScreen.length < 8) {
      currentScreen += $(this).html();
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
    number = $("screen").val();
    if (firstOperation) {
      currentOperator = $(this).attr("id");
      firstOperation = false;
      total = parseFloat(currentScreen);
      currentScreen = "";
    } else {
      pastOperator = currentOperator;
      switch (pastOperator) {
        case "plus":
          total += parseFloat(currentScreen);
          currentScreen = "";
          break;
        case "minus":
          total -= parseFloat(currentScreen);
          currentScreen = "";
          break;
        case "divide":
          total /= parseFloat(currentScreen);
          currentScreen = "";
          break;
        case "product":
          total *= parseFloat(currentScreen);
          currentScreen = "";
          break;
      }
      $("#screen").val(total);
      currentOperator = $(this).attr("id");
    }
  });

  $("#equal").click(() => {
    switch (currentOperator) {
      case "plus":
        total += parseFloat(currentScreen);
        currentScreen = "";
        break;
      case "minus":
        total -= parseFloat(currentScreen);
        currentScreen = "";
        break;
      case "divide":
        total /= parseFloat(currentScreen);
        currentScreen = "";
        break;
      case "product":
        total *= parseFloat(currentScreen);
        currentScreen = "";
        break;
    }
    $("#screen").val(total);
    currentScreen = "";
    number = 0;
    total = "";
    firstOperation = true;
    pastOperator = "";
    currentOperator = "";
  });

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
    total = "";
    firstOperation = true;
    pastOperator = "";
    currentOperator = "";
    $("#screen").val(currentScreen);
  });
});

function calculate(op) {
  number = parseFloat(currentScreen);
  switch (op) {
    case "plus":
      total += number;
      break;
  }

  $("#screen").val(result);
}
