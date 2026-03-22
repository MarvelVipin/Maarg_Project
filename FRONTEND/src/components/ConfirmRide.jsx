import React from 'react'

const ConfirmRide = () => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{props.setVehiclePanel(false)}}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line pt-14"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85OWJmYWM5Mi00ODAzLTQxNGMtODRmYi1kMWZmNjU0NWM5YzAucG5n" alt="" />
        <div className='w-full '>
          <div className='flex items-center gap-5'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className='text-lg font medium'>Brij Enclave Colony</h4>
              <p className='text-gray-600 text-sm -mt-1'>Sunderpur, Varanasi, Uttar Pradesh</p>
            </div>
          </div>
          <div>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className='text-lg font medium'>Brij Enclave Colony</h4>
              <p className='text-gray-600 text-sm -mt-1'>Sunderpur, Varanasi, Uttar Pradesh</p>
            </div>
          </div>
          <div>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className='text-lg font medium'>Brij Enclave Colony</h4>
              <p className='text-gray-600 text-sm -mt-1'>Sunderpur, Varanasi, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide
