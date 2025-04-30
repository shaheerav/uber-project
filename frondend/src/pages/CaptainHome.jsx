import React ,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const [ridePopupPanel, setRidePopupPanel] = useState(true)

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)',
    })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)',
    })
    }
    
  },[ridePopupPanel])
  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(0)',
    })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(100%)',
    })
    }
  },[confirmRidePopupPanel])
  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16 ' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' />
        <Link to='/captain-home' className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
        </div>
        <div className='h-3/5 '>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"/>

        </div>
        <div className='h-2/5 p-6'>
            <CaptainDetails/>
        </div>
        <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div ref={confirmRidePopupPanelRef} className='fixed h-screen w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
          <ConfirmRidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome