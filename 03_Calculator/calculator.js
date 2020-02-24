let action;
let currentScreen = "";
let number;
let result = 0;

$(function() {
  $("#one").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "1";
      $("#screen").val(currentScreen);
    }
  });
  $("#two").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "2";
      $("#screen").val(currentScreen);
    }
  });
  $("#three").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "3";
      $("#screen").val(currentScreen);
    }
  });
  $("#four").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "4";
      $("#screen").val(currentScreen);
    }
  });
  $("#five").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "5";
      $("#screen").val(currentScreen);
    }
  });
  $("#six").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "6";
      $("#screen").val(currentScreen);
    }
  });
  $("#seven").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "7";
      $("#screen").val(currentScreen);
    }
  });
  $("#eight").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "8";
      $("#screen").val(currentScreen);
    }
  });
  $("#nine").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "9";
      $("#screen").val(currentScreen);
    }
  });
  $("#zeroNum").click(() => {
    if (currentScreen.length < 8) {
      currentScreen += "0";
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
