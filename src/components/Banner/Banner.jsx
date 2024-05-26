import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640, // for mobile
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768, // for tablet
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 animate-fadeIn">
              Delicious Recipes Await
            </h1>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                See Recipes
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-4 animate-fadeIn">
              Cooking Made Easy
            </h1>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                See Recipes
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105">
                Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
