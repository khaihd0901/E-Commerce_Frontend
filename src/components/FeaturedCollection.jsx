import React from 'react'

const FeaturedCollection = () => {
  return (
    <div className='py-8'>
        <div className="flex justify-between items-center">
            <h2 className='text-2xl font-bold mb-6'>Featured Collection</h2>
            <div className="flex">
                <i className="fa-solid fa-chevron-left cursor-pointer"></i>
                <i className="fa-solid fa-chevron-right cursor-pointer"></i>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCollection