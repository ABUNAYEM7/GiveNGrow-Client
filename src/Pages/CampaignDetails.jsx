import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CampaignDetails = () => {
    const [campaign,setCampaign] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/AllCampaign/${id}`)
        .then(res=>res.json())
        .then(data=>setCampaign(data[0]))
    },[])
    
    const { _id, title, description, image, deadline, raisedAmount, goal } =
    campaign;
    const datelIneStr = new Date(deadline).toLocaleDateString();
    
  return (
    <div>
      <div className="card bg-base-100 w-11/12 mx-auto shadow-xl relative group">
      <figure className="h-[400px] w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full"
        />
      </figure>
      <div className="card-body p-4 space-y-4">
        <div
          className={`badge badge-secondary`}
        >
          Active
        </div>
        <h2 className="card-title text-primary">{title}</h2>
        <p className="text-base font-medium">{description}</p>
        <p className="text-base font-medium">
          Deadline: <span className="text-lg font-medium">{datelIneStr}</span>
        </p>
        <div className="card-actions flex-col md:flex-row items-center justify-between gap-5">
          <div className='space-x-3'>
          <div className="badge badge-outline text-secondary">
            Amount: {raisedAmount}$
          </div>
          <div className="badge badge-outline text-primary">Goal: {goal}$</div>
          </div>
          <div className='w-full md:w-fit'>
                <button className='btn w-full bg-primary text-white hover:text-primary'>Donate Now</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CampaignDetails
