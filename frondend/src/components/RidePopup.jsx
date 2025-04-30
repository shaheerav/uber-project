import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setRidePopupPanel(false)
        }} className='p-1 text-center w-[95%] absolute top-0'><i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>
        <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3 '>
                <img className='h-10 rounded-full object-cover w-12' src="https://media.istockphoto.com/id/2005859115/video/business-video-call-and-face-of-woman-at-job-interview-office-in-agreement-conversation-or.jpg?s=640x640&k=20&c=iDcUz6eNB34Z4fQl9q0vX9jkzqWdu0Qd43C7WXA-EHQ=" alt="" />
                <h2 className='text-lg font-medium'>Raya fathima</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
        </div>
        <div className='flex justify-between flex-col items-center gap-2'>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
                <i className='text-lg ri-map-pin-user-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-base -mt-1 text-gray-600'>kodivalappil house, pattambi</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className='text-lg ri-map-pin-2-fill'></i>
                <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-base -mt-1 text-gray-600'>kodivalappil house, pattambi</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
            <i className='text-lg ri-currency-line'></i>
                <div>
                    <h3 className='text-lg font-medium'>₹193.20</h3>
                    <p className='text-base -mt-1 text-gray-600'>Cash Cash</p>
                </div>
            </div>
        </div>
        <div className='flex w-full items-center justify-between mt-5'>
            
                <button onClick={()=>{
                props.setRidePopupPanel(false)
            }} 
                className=' mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
                <button onClick={()=>{
                props.setConfirmRidePopupPanel(true)
            }} 
                className='  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
        </div>
        
        </div>
    </div>
  )
}

export default RidePopup