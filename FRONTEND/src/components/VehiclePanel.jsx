import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{props.setVehiclePanel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-14"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose Vehicle</h3>

        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='w-full mb-2 flex border-2 active:border-black rounded-xl items-center justify-between p-3 bg-gray-100'>
          <img className='h-12' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85OWJmYWM5Mi00ODAzLTQxNGMtODRmYi1kMWZmNjU0NWM5YzAucG5n" alt="" />
          <div className=' w-1/2 ml-5'>
            <h4 className='font-medium text-base'>Maarg Car <span><i className="ri-user-fill"></i>5</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='w-full mb-2 flex border-2  rounded-xl active:border-black items-center justify-between p-3 bg-gray-100'>
          <img className='h-12' src="https://png.pngtree.com/png-vector/20220326/ourmid/pngtree-motorcycle-cartoon-vector-colorful-illustrations-png-image_4514944.png" alt="" />
          <div className=' w-1/2 ml-5'>
            <h4 className='font-medium text-base'>BikeRide <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹85</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='w-full mb-2 flex border-2 rounded-xl active:border-black  items-center justify-between p-3 bg-gray-100'>
          <img className='h-12' src="https://png.pngtree.com/png-clipart/20230414/original/pngtree-blue-rickshaw-png-image_9056195.png" alt="" />
          <div className=' w-1/2 ml-5'>
            <h4 className='font-medium text-base'>TriCar <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹85</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='w-full mb-2 flex border-2  rounded-xl active:border-black items-center justify-between p-3 bg-gray-100'>
          <img className='h-12' src="https://png.pngtree.com/png-vector/20220326/ourmid/pngtree-motorcycle-cartoon-vector-colorful-illustrations-png-image_4514944.png" alt="" />
          <div className=' w-1/2 ml-5'>
            <h4 className='font-medium text-base'>Maarg Car<span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹85</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
