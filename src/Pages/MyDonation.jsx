import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Info from '../components/Info'
import { Vortex } from 'react-loader-spinner';

const MyDonation = () => {
  const [donation,setDonation] = useState([])
  const [loading,setLoading] = useState(true)
  const {user} = useContext(AuthContext)
  const userEmail = user?.email;

  useEffect(()=>{
    fetch(`https://give-ngrow-server.vercel.app/donation/${userEmail}`)
    .then(res=>res.json())
    .then(data=>{
      setDonation(data)
      setLoading(false)
    })
  },[userEmail])


  if (!donation || donation.length <= 0) { 
    return <h3 className='text-3xl font-bold text-primary text-center my-12'>No Transaction History</h3>;
  }

  
  return (
    <div className='my-12 p-4'>
      {loading && (
        <div 
        className="w-full min-h-28 flex items-center justify-center">
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
      <div>
        <Info 
        title={`Welcome Dear ${user?.displayName}`}
        subtitle={"Because of you, we are closer to our goal. Let's continue making a difference"}
        />
      </div>
      <div className='flex flex-col gap-5'>
        {
          donation.map(element=>
            <div 
            key={element._id}
            className="card md:flex-row justify-between bg-primary text-white w-full sm:w-11/12 md:w-9/12 mx-auto">
            <div className="card-body w-full md:w-1/2">
              <h2 className="card-title">Campaign Name : {element?.title}</h2>
              <p>Donated Amount : {element?.amount}</p>
              <p>Goal Amount : {element?.goal}</p>
            </div>
            <div className="md:w-fit w-full mx-auto border-2  border-dotted"></div>
            <div className="card-body w-full md:w-1/2">
              <h2 className="card-title">transaction Id : {element?._id}</h2>
              <p>Campaign Deadline : {element?.deadline.split('T')[0]}</p>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default MyDonation
