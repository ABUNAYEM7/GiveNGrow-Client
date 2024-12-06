import React from 'react'
import Info from '../components/Info'
import { Outlet } from 'react-router'

const AllCampaign = () => {
  return (
    <div>
      <div>
      <Info 
      title={'Empowering Communities, Innovating Futures'}
      subtitle={'Join hands to support meaningful initiatives and shape a brighter tomorrow, one campaign at a time.'}
      />
      </div>
      <div className='my-6 p-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AllCampaign
