import React from 'react'

const Info = ({title,subtitle}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='text-center space-y-4'>
        <h3 className='text-4xl font-bold text-primary'>
            {title}
        </h3>
        <p className='text-base font-medium w-11/12 md:w-2/3 mx-auto'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Info
