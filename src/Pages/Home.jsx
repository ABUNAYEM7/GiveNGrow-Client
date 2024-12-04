import React from 'react'
import Banner from '../components/Banner'
import Campaigns from '../components/Campaigns'


const Home = () => {
  return (
    <div>
        {/* banner-container */}
      <div className='px-4'>
        <Banner/>
      </div>
      <div>
        <Campaigns/>
      </div>
    </div>
  )
}

export default Home
