import React from 'react'
import Banner from '../components/Banner'
import Campaigns from '../components/Campaigns'
import Iframe from '../components/Iframe'
import HelpFor from '../components/HelpFor'
import Features from '../components/Features'
import HowToUse from '../components/HowToUse'


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
      <div>
        <Iframe/>
      </div>
      <div>
        <HelpFor/>
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <HowToUse/>
      </div>
    </div>
  )
}

export default Home
