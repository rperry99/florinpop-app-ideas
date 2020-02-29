let action;
let currentScreen = "";
let number;
let result = 0;

$(document).ready(function() {
  $(".num").click(function() {
    if (currentScreen.length < 8) {
      currentScreen += $(this).html();
      $("#screen").val(currentScreen);
    }
  });

  $("#point").click(() => {
    if (!currentScreen.includes(".")) {
      currentScreen += ".";
      $("#screen").val(currentScreen);
    }
  });

  $("#plus").click(() => {
    action = "plus";
    number = parseFloat(currentScreen);
    currentScreen = "";
    calculate();
  });
  $("#minus").click(() => {
    action = "minus";
    number = parseFloat(currentScreen);
    currentScreen = "";
    calculate();
  });
  $("#divide").click(() => {});
  $("#product").click(() => {});

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
