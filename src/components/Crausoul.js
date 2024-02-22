import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crausoul = (props) => {
  const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/";
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider">
      {props?.children?.map((ele, indx) => {
        return (
          <div className="slider_img_wrapper" key={indx}>
            <img
              className="slider_img"
              src={`${IMG_CDN_URL}${ele.props.img}`}
            />
            <p className="price_chart">
              {ele.props.price !== undefined
                ? ele.props.price / 100
                : ele.props.defaultPrice / 100}
              &nbsp;{"RS"}
            </p>
          </div>
        );
      })}
    </Slider>
  );
};

export default Crausoul;
