import Lottie from "lottie-react";
import bookmarkAnimation from '../../public/bookmark.json';
import createAnimation from '../../public/create.json'
import connectAnimation from '../../public/connect.json'
import achievementAnimation from '../../public/achievement.json'
const HowToUse = () => {
  return (
    <div className='my-12 p-4'>
      {/* info-container */}
      <div className='space-y-3 text-center'>
        <p className='text-lg font-medium text-secondary'>So you want to grow with us ?</p>
        <h3 className='text-2xl md:text-3xl font-bold'>
          Here's How To Use Give & Grow
        </h3>
        <div className='divider w-11/12 md:w-2/3 mx-auto'></div>
        <p className='text-base text-primary'>We recommend the following process:</p>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <Lottie className="w-52 h-52 " animationData={bookmarkAnimation}/>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-primary">1.Pick a Campaign</h1>
            <p className="text-base font-medium">Choose a campaign to support and make an impact</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <Lottie className="w-52 h-52 " animationData={createAnimation}/>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-primary">2.Create Campaign</h1>
            <p className="text-base font-medium">Create Campaign in G&G and raise Funds</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <Lottie className="w-52 h-52 " animationData={connectAnimation}/>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-primary">3.Create Connection</h1>
            <p className="text-base font-medium">Connect people around the world and show your campaign </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <Lottie className="w-52 h-52 " animationData={achievementAnimation}/>
          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-primary">4.achieve Your Goal</h1>
            <p className="text-base font-medium">Set a goal and achieve it through Give & Grow</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToUse
