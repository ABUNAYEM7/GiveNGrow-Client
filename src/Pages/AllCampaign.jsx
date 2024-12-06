import React from 'react'
import Info from '../components/Info'
import { Outlet } from 'react-router'

const AllCampaign = () => {
  return (
    <div>
      <div>
      <Info 
      title={'Empowering Communities, Innovating Futures'}
      subtitle={'This title captures the collective impact of your campaigns, highlighting community support, innovation, and positive change'}
      />
      </div>
      <div className='my-6 p-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AllCampaign
