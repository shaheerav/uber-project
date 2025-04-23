import React from 'react'

const LocationSearchPanel = (props) => {
  const locations = [
    "kodivalappil house, near cholakkal auditorium, pattambi, palakkad",
    "vadayil house, kunnappally po, perinthalmanna, malappuram",
    "kottakkal house, near kottakkal ayurveda hospital, kottakkal, malappuram",
    "katilethodi house, near railway station, cherukara, pernithalmanna, malappuram",
  ]
  return (
    <div>
      {/* this is just a sample data*/ }
      {locations.map((value,index)=>{
        return (
          <div onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} key={index} className='flex border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start my-4 gap-4'>
        <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className='ri-map-pin-fill '></i></h2>
        <h4 className='font-medium'>{value}</h4>
      </div>
        )
      })}
      
    </div>
  )
}

export default LocationSearchPanel