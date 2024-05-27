import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="relative banner-slide mb-28">
        <div
          className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-6 animate-fadeIn">
              Delicious Recipes Await
            </h1>
            <div className="flex justify-center space-x-4">
              <button className="btn btn-blue">See Recipes</button>
              <button className="btn btn-green">Add Recipe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative banner-slide">
        <div
          className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-white text-4xl font-bold mb-6 animate-fadeIn">
              Cooking Made Easy
            </h1>
            <div className="flex justify-center space-x-4">
              <button className="btn btn-blue">See Recipes</button>
              <button className="btn btn-green">Add Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
