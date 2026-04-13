import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import axios from 'axios'
import LocationSearchPanel from '../components/LocationSearchPanel.jsx'
import VehiclePanel from '../components/VehiclePanel.jsx'
import ConfirmRide from '../components/ConfirmRide.jsx'
import LookingForDriver from '../components/LookingForDriver.jsx'
import WaitingForDriver from '../components/WaitingForDriver.jsx'
import MapComponent from "../components/MapComponent";

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [activeField, setActiveField] = useState('')
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const panelRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  const fetchSuggestions = async (query) => {
    try {
      const token = localStorage.getItem('token');

      // 🚨 ADD THIS CHECK
      if (!token) {
        console.log("No token found, redirecting to login");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: query },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error.response?.data || error.message);
      setSuggestions([]);
    }
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24px',
        // opacity: 1,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        // opacity: 0,
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 font-bold absolute right-4 top-1 z-20'  src="https://cdn-icons-png.flaticon.com/128/346/346945.png" alt="" />
      {/* <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2018/10/Spaines-es_Shield-Web_RiderEmergencyAssistance_20181015.gif" alt="" />
      </div> */}


      <div className="absolute top-0 left-0 w-full h-full z-0">
        <MapComponent />
      </div>


      <div className='flex flex-col justify-end h-screen absolute top-0 w-full z-10 pointer-events-none'>
        <div className='h-[30%] p-6 bg-white relative pointer-events-auto'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold '>Find a Trip</h4>
          <form action="" onSubmit={(e) => { submitHandler(e) }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setActiveField('pickup')
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
                if (e.target.value.length >= 3) {
                  fetchSuggestions(e.target.value)
                } else {
                  setSuggestions([])
                }
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4' type="text" placeholder='Enter pickup location' />
            <input
              onClick={() => {
                setActiveField('destination')
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
                if (e.target.value.length >= 3) {
                  fetchSuggestions(e.target.value)
                } else {
                  setSuggestions([])
                }
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg  w-full mt-4' type="text" placeholder='Enter destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0 pointer-events-auto'>
          <LocationSearchPanel
            suggestions={suggestions}
            activeField={activeField}
            setPickup={setPickup}
            setDestination={setDestination}
            setPanelOpen={setPanelOpen}
            setSuggestions={setSuggestions}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 pointer-events-auto'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 pointer-events-auto'>
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      <div ref={vehicleFoundRef} className='w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 pointer-events-auto'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='w-full fixed z-10 bottom-0  bg-white px-3 py-10 pt-12 pointer-events-auto'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home
