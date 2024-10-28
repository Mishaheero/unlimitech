// slider.js
import "slick-carousel/slick/slick.css"; // Import Slider
import "slick-carousel"; // Import Slick Slider
import $ from "jquery"; // Import jQuery

export function initSlider() {
  $(document).ready(function () {
    $(".slick__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      dots: true,
      arrows: true,
      prevArrow: $(".slick-prev"), 
      nextArrow: $(".slick-next"),
    });

    $(".slick-dots button").text("");
  });
}
