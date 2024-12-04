import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const AllCampaignCards = () => {
    const [allCampaign,setAllCampaign] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/AllCampaign')
        .then(res=>res.json())
        .then(data=>setAllCampaign(data))
    },[])

    
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
      {allCampaign.map(camp=> <Card key={camp._id} campaign={camp}/>)}
    </div>
  )
}

export default AllCampaignCards
