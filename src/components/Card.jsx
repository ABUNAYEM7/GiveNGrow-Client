import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Card = ({ campaign }) => {
  const [active, setActive] = useState(true);



  const { _id, title, description, image, deadline, raisedAmount, goal } =
    campaign;



  useEffect(() => {
    let currentDate = new Date();
    currentDate.setHours(0,0,0,0)

    const deadlineDate = new Date(deadline)
    deadlineDate.setHours(0,0,0,0)


    if (currentDate > deadlineDate) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [deadline]);

  const datelIneStr = new Date(deadline).toLocaleDateString();



  return (
    <div className="card bg-base-100 max-w-96 shadow-xl relative group">
      <figure className="h-60 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-4">
        <div
          className={`badge badge-secondary ${
            !active && "bg-primary border-none"
          }`}
        >
          {active ? "Active" : "Complete"}
        </div>
        <h2 className="card-title text-primary">{title}</h2>
        <p className="text-base font-medium">{description}</p>
        <p className="text-base font-medium">
          Deadline: <span className="text-lg font-medium">{datelIneStr}</span>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-secondary">
            Amount: {raisedAmount}$
          </div>
          <div className="badge badge-outline text-primary">Goal: {goal}$</div>
        </div>
      </div>

      {/* Hover Layer */}
      <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <Link 
          to={`/CampaignDetails/${_id}`}
          className="btn bg-secondary text-white hover:text-secondary">
            See More
          </Link>
      </div>
    </div>
  );
};

export default Card;
