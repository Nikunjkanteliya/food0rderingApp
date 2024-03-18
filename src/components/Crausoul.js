import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_CDN_URL } from "../config/config";

const Crausoul = (props) => {
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
    <Slider {...settings} >
      {props?.children?.map((ele, indx) => {
        return (
          <div className="p-5 relative" key={indx}>
            <img
              className="rounded-lg max-h-[450px]"
              src={`${IMG_CDN_URL}${ele.props.img}`}
            />
            <p className="absolute bottom-[50px] left-[50px] text-[#fff] font-[400] text-[1rem] font-Basis_Grotesque_Pro_Bold">
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
