import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate()
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const clickHandler =()=>{
    navigate('/AllCampaign')
  }

  return (
    <div className="w-full rounded-xl p-4 relative">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="relative">
          <img 
            className="w-full h-[510px] object-center object-cover rounded-xl"
            src={banner1} 
            alt="banner Image"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 p-6 rounded-lg text-gray-800 w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-3xl font-bold">Empower Your Dreams</h2>
            <p className="mt-4 text-lg w-full md:w-2/5  mx-auto">
              Launch your project with the support of a global community. Create, fund, and grow with us.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative">
          <img 
            className="w-full h-[510px] object-center object-cover rounded-xl"
            src={banner2} 
            alt="banner Image"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 p-6 rounded-lg text-gray-800 w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-3xl font-bold">Support Innovative Ideas</h2>
            <p className="mt-4 w-full md:w-2/5 mx-auto text-lg">
              Join hands to bring innovative solutions to life. Your support can change the world.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative">
          <img 
            className="w-full h-[510px] object-center object-cover rounded-xl"
            src={banner3} 
            alt="banner Image"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 p-6 rounded-lg text-gray-800 w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-3xl font-bold">Make an Impact</h2>
            <p className="mt-4 text-lg w-full md:w-2/5 mx-auto">
              Every contribution matters. Help create a positive impact in your community and beyond.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
