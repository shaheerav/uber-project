import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainSignup = () => {

  const navigate = useNavigate()
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [vehicleColor,setVehicleColor] = useState('')
  const [vehiclePlate,setVehiclePlate] = useState('')
  const [vehicleCapacity,setVehicleCapacity] = useState('')
  const [vehicleType,setVehicleType] = useState('')

  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const submitHadler = async (e)=>{
    e.preventDefault()
    const captainData = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setFirstName('')
    setLastname('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('') 
    setVehicleCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-24 mb-4' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
      <form onSubmit={(e)=>submitHadler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
          <div className='flex gap-4  mb-6'>
          <input 
            required
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border text-lg placeholder:text-base'
            type='text' 
            placeholder='First name' 
          />
          <input 
            required
            value={lastName}
            onChange={(e)=>setLastname(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border text-lg placeholder:text-base'
            type='text' 
            placeholder='Last name' 
          />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
          <input 
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
            type='email' 
            placeholder='email@example.com' 
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input 
            required 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
            type='password' 
            placeholder='password' 
          />
          <h3 className='text-lg font-medium mb-2'>Vehicle information</h3>
          <div className='flex gap-4 mb-6'>
          <input 
            required
            value={vehicleColor}
            onChange={(e)=>setVehicleColor(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border text-lg placeholder:text-base'
            type='text' 
            placeholder='Vehicle color'
          />
          <input 
            required
            value={vehiclePlate}
            onChange={(e)=>setVehiclePlate(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border text-lg placeholder:text-base'
            type='text' 
            placeholder='Vehicle plate'
          />
          </div>
          <div className='flex gap-4 mb-6'> 
          <input
            required
            value={vehicleCapacity}
            onChange={(e)=>setVehicleCapacity(e.target.value)}
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-3 border text-lg placeholder:text-base'
            type='number' 
            placeholder='Vehicle capacity'
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-3 w-full text-lg placeholder:text-base'
          >Create Captain Account</button>
      </form>
      <p className='text-center'>Already have a account?<Link className='text-blue-600' to='/captain-login'>Login here</Link></p>
        </div>
        <div>
        <p className='text-[15px] '> This site is protected by reCAPCHA and the <span className='underline'>Google privacy Plicy</span> and <span className='underline'>Term fo Sercice apply</span>. </p>
        </div>
      
    </div>
  )
}

export default CaptainSignup