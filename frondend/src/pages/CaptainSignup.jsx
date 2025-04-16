import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData,setUserData] = useState({})

  const submitHadler =(e)=>{
    e.preventDefault()
    setUserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
    })
    console.log(userData)
    setFirstName('')
    setLastname('')
    setEmail('')
    setPassword('')
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
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-3 w-full text-lg placeholder:text-base'
          >SignUp</button>
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