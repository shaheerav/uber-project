import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://www.miniphysics.com/wp-content/uploads/2011/05/file-AYQMIHQeCrps7zXtPZbUT8Iv.webp)] h-screen pt-8  w-full flex justify-between flex-col'>
        <img className='w-24 ml-8' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt=''/>
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[40px] font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-3'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start