$(document).ready(function() {
  let status = $(".active").html();
  $("#on").click(() => {
    if (status === "Off") {
      status = "On";
      $("#off")
        .removeClass("active")
        .addClass("deactive");
      $("#on")
        .removeClass("deactive")
        .addClass("active");
    }
  });

  $("#off").click(() => {
    if (status === "On") {
      status = "Off";
      $("#on")
        .removeClass("active")
        .addClass("deactive");
      $("#off")
        .removeClass("deactive")
        .addClass("active");
    }
  });

  let delayClasses = ["delay1", "delay2", "delay3", "delay4"];
  $(".light").each(function() {
    $(this).addClass(delayClasses[~~(Math.random() * delayClasses.length)]);
  });
});
