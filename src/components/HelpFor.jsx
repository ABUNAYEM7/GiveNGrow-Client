import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const HelpFor = () => {
  const [campaign,setCampaign] = useState([])

useEffect(()=>{
  fetch('http://localhost:5000/AllCampaign')
  .then(res=>res.json())
  .then(data=>setCampaign(data))
},[])


  return (
    <div className="my-6 p-4">
      <h3 className="text-3xl font-bold text-primary text-center mb-12">
        Give & Grow Help For
      </h3>
      <div className="w-full md:w-11/12 mx-auto">
        <Marquee 
        pauseOnHover={true}>
          {campaign.map((item, index) => (
            <div key={index} className="relative w-60 h-60 rounded-xl mx-8 cursor-pointer">
              <img
                className="w-full h-full rounded-xl"
                src={item.image}
                alt={`Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HelpFor;
