import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
  const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    const [captainData,setCaptainData] = useState('')
    const submitHadler = (e)=>{
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-24 mb-2' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt=''/>
      <form onSubmit={(e)=>submitHadler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
            type='email' 
            placeholder='email@example.com' 
          />
          <h3 className='text-lg font-medium mb-2'>Enter password</h3>
          <input 
            required 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-3 border w-full text-lg placeholder:text-base'
            type='password' 
            placeholder='password' 
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-3 w-full text-lg placeholder:text-base'
          >Login</button>
      </form>
      <p className='text-center'>Join a fleet?<Link className='text-blue-600' to='/captain-signup'>Register as a Captain</Link></p>
        </div>
        <div>
          <Link to='/login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
      
    </div>
  )
}

export default Captainlogin

