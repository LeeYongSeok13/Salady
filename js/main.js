$(function () {
  $("#MainSlider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });

  $(".Item-slider").slick({
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
  });
});
