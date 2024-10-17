import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from './fireBase'
import { signOut } from 'firebase/auth'


const Home = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const username = location.state?.username;

  const handleLogout = async()=>{
    await signOut(auth);
    navigate('/')
  }
  return (
    <div style={{minHeight:'100vh',width:'100%',background:'linear-gradient(150deg, #a1c4 ,#c2e9fb)'}} className='d-flex justify-content-center align-items-center'>
        
        <div style={{Miwidth:'400px',height:'200px'}} className='border rounded shadow p-4 bg-light d-flex flex-column justify-content-center align-items-center'>
          <h1 style={{fontFamily:'roboto',fontSize:'3em'}}>Welcome <span className='text-primary'>{username}!</span></h1>
          <button  onClick={handleLogout} className='btn btn-danger'>Logout!</button>
        </div>
       
    </div>
  )
}

export default Home