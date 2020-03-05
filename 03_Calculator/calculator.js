$(document).ready(function() {
  let currentScreen = "";
  let pastOperator;
  let currentOperator;
  let total;
  let firstOperation = true;
  let decimal = false;
  let limit = 8;

  //Each time a number button is pressed
  $(".num").click(function() {
    if (decimal === true) {
      limit = 9;
    } else {
      limit = 8;
    }
    if (currentScreen.length < limit) {
      currentScreen += $(this).html();
      $("#screen").val(currentScreen);
    }
  });

  //Add a decimal
  $("#point").click(() => {
    if (decimal === false) {
      if (currentScreen.length < 8) {
        decimal = true;
        currentScreen += ".";
        $("#screen").val(currentScreen);
      }
    }
  });

  // When an operator button is pressed
  $(".operator").click(function() {
    number = $("screen").val();
    decimal = false;
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
      if (String(total).includes(".") && total.length <= 9) {
        $("#screen").val(total);
      } else if (!String(total).includes(".") && total.length <= 8) {
        $("#screen").val(total);
      } else {
        $("#screen").val("ERR");
      }
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
    if (String(total).includes(".") && total.length <= 9) {
      $("#screen").val(total);
    } else if (!String(total).includes(".") && total.length <= 8) {
      $("#screen").val(total);
    } else {
      $("#screen").val("ERR");
    }
    resetStuff();
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
    resetStuff();
    $("#screen").val(currentScreen);
  });

  function resetStuff() {
    currentScreen = "";
    pastOperator = "";
    currentOperator = "";
    total = 0;
    firstOperation = true;
    decimal = false;
    limit = 8;
  }
});
