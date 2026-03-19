import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
      height: '70%',
      opacity: 1,
    })
    gsap.to(panelCloseRef.current, {
      opacity: 1,
    })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-4 top-1' src="https://cdn-icons-png.flaticon.com/128/346/346945.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full' src="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2018/10/Spaines-es_Shield-Web_RiderEmergencyAssistance_20181015.gif" alt="" />
      </div>
      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form action="" onSubmit={(e)=>{submitHandler(e)}}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=> {
              setPickup(e.target.value)
            }}
             className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4' type="text" placeholder='Enter pickup location' />
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e)=> {
              setDestination(e.target.value)
            }}
             className='bg-[#eee] px-12 py-2 text-base rounded-lg  w-full mt-4' type="text" placeholder='Enter destination' />
          </form>
        </div>
        <div  ref={panelRef} className='h-[70%] opacity-0 bg-red-500 h-0'>

        </div>
      </div>
    </div>
  )
}

export default Home
