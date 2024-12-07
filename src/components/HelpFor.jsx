import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Vortex } from "react-loader-spinner";

const HelpFor = () => {
  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    fetch("https://give-ngrow-server.vercel.app/AllCampaign")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCampaign(data);
      })
      .catch((err) => {
        console.error("Failed to fetch campaigns:", err);
        setError("Failed to load campaigns. Please try again later.");
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);


  if (loading) {
    return (
      <div className="w-full min-h-28 flex items-center justify-center">
        <Vortex
          visible={true}
          height="180"
          width="180"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }


  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-red-500">{error}</h3>
      </div>
    );
  }


  if (campaign.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold text-primary">No campaigns found</h3>
        <p className="text-primary">Please check back later.</p>
      </div>
    );
  }


  return (
    <div className="my-6 p-4">
      <h3 className="text-3xl font-bold text-primary text-center mb-12">
        Give & Grow Help For
      </h3>
      <div className="w-full md:w-11/12 mx-auto">
        <Marquee pauseOnHover={true}>
          {campaign.map((item, index) => (
            <div
              key={index}
              className="relative w-60 h-60 rounded-xl mx-8 cursor-pointer"
            >
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
