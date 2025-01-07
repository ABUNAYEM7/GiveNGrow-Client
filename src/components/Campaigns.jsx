import React, { useEffect, useState } from "react";
import Info from "./Info";
import { Vortex } from "react-loader-spinner";
import Card from "./Card";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://give-ngrow-server.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data.slice(0,4));
      });
  }, []);

  return (
    <div className="p-4">
      {/* campaign-info-container */}
      <div>
        <Info
          title={"Our Current Campaign"}
          subtitle={
            "Empower creative projects, startups, and personal causes by contributing and making a difference today. Every donation counts!"
          }
        />
      </div>
      {/* spinner-container */}
      {campaigns.length === 0 && (
        <div className="my-20 w-full min-h-28 flex items-center justify-center">
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
      )}
      {/* campaign-cards-container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5">
        {campaigns.map((camp) => (
          <Card campaign={camp} key={camp._id} />
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
