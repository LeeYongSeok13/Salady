$(function () {
  $("#header .nav ul li").on("mouseover", function () {
    $("#header .nav ul li ul").stop().slideUp(1000);
    $(this).children("#header .nav ul li ul").stop().slideDown(200);
  });

  $("#header .nav ul li").on("mouseleave", function () {
    $("#header .nav ul li ul").stop().slideUp(1000);
  });

  $("#MainSlider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });

  $(".Item-slider").slick({});
});
