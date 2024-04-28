"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  // Carousel Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "100",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    // Slider on the Party page
    <Slider {...settings} className="carousel-container">
      <div>
        <img src="/9.png" alt="" />
      </div>
      <div>
        <img src="/10.png" alt="" />
      </div>
      <div>
        <img src="/11.png" alt="" />
      </div>
      <div>
        <img src="/12.png" alt="" />
      </div>
    </Slider>
  );
}
