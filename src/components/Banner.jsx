import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const clickHandler = () => {
    navigate("/AllCampaign");
  };


  return (
    <div className="w-full  rounded-xl relative mt-20">
      <Carousel
       autoPlay={true}
       infiniteLoop={true}
        showArrows={true}
      >
        {/* slide-2 */}
        <div className="max-h-[800px] md:max-h-[500px] relative">
          <img className="max-h-[800px] md:max-h-[500px]" src={banner1} alt="Slide 1" />

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 md:p-6 p-2 rounded-lg text-gray-800 w-[90%] md:w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-xl md:text-3xl font-bold">Empower Your Dreams</h2>
            <p className="mt-4 text-sm md:text-lg w-full md:w-2/5  mx-auto">
              Launch your project with the support of a global community. Create, fund, and grow with us.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>
        {/* slide-2 */}
        <div className="max-h-[800px] md:max-h-[500px] relative">
          <img className="max-h-[500px]" src={banner2} alt="Slide 2" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 md:p-6 p-3 rounded-lg text-gray-800 w-[90%] md:w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-xl md:text-3xl font-bold">Support Innovative Ideas</h2>
            <p className="mt-4 w-full md:w-2/5 mx-auto text-sm md:text-lg">
              Join hands to bring innovative solutions to life. Your support can change the world.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>
        {/* slide-3 */}
        <div className="max-h-[800px] md:max-h-[500px] relative">
          <img className="max-h-[800px] md:max-h-[500px]" src={banner3} alt="Slide-3" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E07A5F] bg-opacity-80 md:p-6 p-2 rounded-lg text-gray-800 w-[90%] md:w-[60%] text-center outline-double outline-secondary">
            <h2 className="text-xl md:text-3xl font-bold">Make an Impact</h2>
            <p className="mt-4 text-sm md:text-lg w-full md:w-2/5 mx-auto">
              Every contribution matters. Help create a positive impact in your community and beyond.
            </p>
            <button 
            onClick={clickHandler}
            className="mt-6 btn py-2 bg-secondary text-white hover:text-secondary border-none ">
              Explore
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
