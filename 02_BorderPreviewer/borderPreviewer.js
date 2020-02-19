const playground = document.getElementById("playground");
const reset = document.getElementById("reset");
const output = document.getElementById("output");
const radiusBL = document.getElementById("radius-bl");
const radiusBR = document.getElementById("radius-br");
const radiusTL = document.getElementById("radius-tl");
const radiusTR = document.getElementById("radius-tr");
const width = document.getElementById("width");
const color = document.getElementById("color");

let userWidth = width.value;
// let userRadiusTL = radiusTL.value;
// let userRadiusTR = radiusTR.value;
// let userRadiusBL = radiusBL.value;
// let userRadiusBR = radiusBR.value;
let userColor = color.value;
// updateCSSOutput();

// Reset border button
function resetBorder() {
  playground.style.borderWidth = "1px";
  playground.style.borderRadius = "0";
  playground.style.borderColor = "black";
  color.value = "#000000";
  width.value = 1;
  radiusTL.value = 0;
  radiusBL.value = 0;
  radiusTR.value = 0;
  radiusBR.value = 0;
  output.value = `.container { border: solid 1px #000000; border-radius: 0px; }`;
}

// Add CSS to output
function updateCSSOutput() {
  let radTL = radiusTL.value;
  let radTR = radiusTR.value;
  let radBL = radiusBL.value;
  let radBR = radiusBR.value;
  let col = color.value;
  let wid = width.value;
  output.value = `.container { border: solid ${wid}px ${col}; border-radius: ${radTL}px ${radTR}px ${radBR}px ${radBL}px; }`;
  playground.style.borderRadius = `${radTL}px ${radTR}px ${radBR}px ${radBL}px`;
  playground.style.borderColor = col;
  playground.style.borderWidth = `${wid}px`;
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
  $("#slider-range").slider({
    orientation: "vertical",
    range: true,
    min: 0,
    max: 100,
    values: [0, 100],
    slide: function(event, ui) {
      playground.style.borderRadius = `20% 20% 20% 20% / 0% ${(ui.values[1] -
        100) *
        -1}% ${ui.values[0]}% 0%`;
      output.value = `.container { border: solid 0px black; border-radius: 20% 20% 20% 20% / 0% ${(ui
        .values[1] -
        100) *
        -1}% ${ui.values[0]}% 0%; }`;
      console.log("Value0", ui.values[0], "Value1", ui.values[1]);
    }
  });
});
