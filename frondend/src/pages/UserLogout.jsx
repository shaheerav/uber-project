import React from 'react'
import axios from 'axios'

const UserLogout = () => {
    const token = localStorage.getItem('token')
    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,{
        headers:{
            Authorization:`Beare${token}`
        }
    }).then((response)=>{
        if(response.status===200){
            localStorage.removeItem('token')
            Navigate('/login')
        }
    })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout