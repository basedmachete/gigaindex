var skewRange = 30;

$(document.body)
  .on("mouseenter", "a", function () {
    $(".walker")
      .css("top", $(this).position().top)
      .find(".bg")
      .each(function () {
        $(this)
          .css(
            Modernizr.prefixed("transform"),
            "skewX(" + ((Math.floor(Math.random() * (skewRange * 2)) + 1) - skewRange) + "deg)"
          );
      });
  });