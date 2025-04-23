import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehiclePanel(false)
        }} className='p-1 text-center w-[95%] absolute top-0'><i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        <div className='flex justify-between flex-col items-center gap-2'>
        <img className='h-25' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
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
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
        }} 
            className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide