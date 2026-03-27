import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex item-center justify-between'>
          <div className='flex item-center justify-start gap-3'>
            <img className=' h-14 object-cover w-14 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCnkA8Z1as6TlNW-IQY0bOxPicwmej0Il0g&s" alt="" />
            <h4 className='text-lg font-medium'>Vivek pandey</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹265.36</h4>
            <p className='text-sm  text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-4  bg-gray-200 rounded-xl justify-center gap-5 item-start'>
          <div className='text-center'>
            <i className=" text-2xl font-thin  mb-2 ri-time-line"></i>
            <h5 className='text-lg font-medium '>10.3</h5>
            <p className='text-sm text-gray-400'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className=" text-2xl font-thin mb-2  ri-dashboard-3-line"></i>
            <h5 className='text-lg font-medium '>10.3</h5>
            <p className='text-sm text-gray-400'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className=" text-2xl font-thin  mb-2 ri-booklet-line"></i>
            <h5 className='text-lg font-medium '>10.3</h5>
            <p className='text-sm text-gray-400'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
