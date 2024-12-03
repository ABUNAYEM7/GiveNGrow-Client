import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banner1.webp"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-full  rounded-xl p-4 relative">
      <Slider {...settings} >
        <div>
          <img 
          className="w-full h-[510px] object-center object-fill  rounded-xl"
          src={banner1} alt="banner Image" />
        </div>
        <div>
          <img 
          className="w-full h-[510px] object-center object-fill rounded-xl"
          src={banner2} alt="banner Image"/>
        </div>
        <div>
          <img 
          className="w-full h-[510px] object-center object-fill rounded-xl"
          src={banner3} alt="banner Image"/>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
