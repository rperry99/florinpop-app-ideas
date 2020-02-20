const playground = document.getElementById("playground");
const reset = document.getElementById("reset");
const output = document.getElementById("output");
const width = document.getElementById("width");
const color = document.getElementById("color");

let userWidth = width.value;
let userColor = color.value;
let userTopX = 20;
let userTopY = 20;
let userRightX = 20;
let userRightY = 20;
let userBottomX = 20;
let userBottomY = 20;
let userLeftX = 20;
let userLeftY = 20;
updateBorder(
  userWidth,
  userColor,
  userTopX,
  userTopY,
  userRightX,
  userRightY,
  userBottomX,
  userBottomY,
  userLeftX,
  userLeftY
);

color.addEventListener("change", function() {
  userColor = color.value;
  updateBorder(
    userWidth,
    userColor,
    userTopX,
    userTopY,
    userRightX,
    userRightY,
    userBottomX,
    userBottomY,
    userLeftX,
    userLeftY
  );
});

width.addEventListener("change", function() {
  userWidth = width.value;
  updateBorder(
    userWidth,
    userColor,
    userTopX,
    userTopY,
    userRightX,
    userRightY,
    userBottomX,
    userBottomY,
    userLeftX,
    userLeftY
  );
});

// Reset border button
function resetBorder() {
  playground.style.borderWidth = "1px";
  playground.style.borderRadius = "20%";
  playground.style.borderColor = "black";
  color.value = "#000000";
  width.value = 1;
  output.value = `.container { border: solid black 1px; border-radius: 20% 20% 20% 20% / 20% 20% 20% 20%;}`;
}

// Let the user copy the output CSS
function copy() {
  let copyText = output;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + output.value);
}

$(function() {
  $("#slider-range-right").slider({
    orientation: "vertical",
    range: true,
    min: 0,
    max: 100,
    values: [20, 80],
    slide: function(event, ui) {
      userRightX = (ui.values[1] - 100) * -1;
      userRightY = ui.values[0];
      updateBorder(
        userWidth,
        userColor,
        userTopX,
        userTopY,
        userBottomX,
        userBottomY,
        userLeftX,
        userRightX,
        userRightY,
        userLeftY
      );
    }
  });
  $("#slider-range-left").slider({
    orientation: "vertical",
    range: true,
    min: 0,
    max: 100,
    values: [20, 80],
    slide: function(event, ui) {
      userLeftX = (ui.values[1] - 100) * -1;
      userLeftY = ui.values[0];
      updateBorder(
        userWidth,
        userColor,
        userTopX,
        userTopY,
        userBottomX,
        userBottomY,
        userLeftX,
        userRightX,
        userRightY,
        userLeftY
      );
    }
  });
  $("#slider-range-top").slider({
    orientation: "horizontal",
    range: true,
    min: 0,
    max: 100,
    values: [20, 80],
    slide: function(event, ui) {
      userTopY = (ui.values[1] - 100) * -1;
      userTopX = ui.values[0];
      updateBorder(
        userWidth,
        userColor,
        userTopX,
        userTopY,
        userBottomX,
        userBottomY,
        userLeftX,
        userRightX,
        userRightY,
        userLeftY
      );
    }
  });
  $("#slider-range-bottom").slider({
    orientation: "horizontal",
    range: true,
    min: 0,
    max: 100,
    values: [20, 80],
    slide: function(event, ui) {
      userBottomX = (ui.values[1] - 100) * -1;
      userBottomY = ui.values[0];
      updateBorder(
        userWidth,
        userColor,
        userTopX,
        userTopY,
        userBottomX,
        userBottomY,
        userLeftX,
        userRightX,
        userRightY,
        userLeftY
      );
    }
  });
  $("#reset").click(() => {
    $("#slider-range-left").slider({ values: [20, 80] });
    $("#slider-range-right").slider({ values: [20, 80] });
    $("#slider-range-top").slider({ values: [20, 80] });
    $("#slider-range-bottom").slider({ values: [20, 80] });
  });
});

function updateBorder(
  width,
  color,
  pos1,
  pos2,
  pos3,
  pos4,
  pos5,
  pos6,
  pos7,
  pos8
) {
  playground.style.borderRadius = `${pos1}% ${pos2}% ${pos3}% ${pos4}% / ${pos5}% ${pos6}% ${pos7}% ${pos8}%`;
  playground.style.borderColor = color;
  playground.style.borderWidth = `${width}px`;
  output.value = `.container { border: solid ${color} ${width}px; border-radius: ${pos1}% ${pos2}% ${pos3}% ${pos4}% / ${pos5}% ${pos6}% ${pos7}% ${pos8}%;} `;
}
