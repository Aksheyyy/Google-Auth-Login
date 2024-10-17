import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './fireBase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSignUp = async ()=>{
        try{
            const result = await signInWithPopup(auth,provider);
            const user = result.user;
            console.log("User details:",user);
            navigate('/home',{state: {username:user.displayName}});
        }catch(err){
            alert("Error during Sign-In",err)
               
        }
      }
  return (
    <>
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #a1c4, #c2e9fb)'
      }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            margin: '0 auto 20px auto', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="border"
        >
          <i style={{ fontSize: '3em', color: 'blue' }} className="fa-solid fa-code"></i>
        </div>


        {/* Text */}
        <h1 style={{ color: '#154360' }}>Login/SignUp</h1>
        <hr />
        <h2 style={{ color: '#1e3c72' }}>Don't waste your time!!!</h2>
        <p style={{ color: '#555' }}>Login safely and quickly using Google.</p>

        
        <button onClick={handleSignUp} className="btn btn-primary d-flex align-items-center justify-content-center mx-auto" style={{ marginTop: '20px' }}>
          <img
            style={{
              width: '30px',
              height: '28px',
              objectFit: 'cover',
              borderRadius:'50%',
              marginRight: '1em',
            }}
            src="https://th.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?rs=1&pid=ImgDetMain"
            alt="Google Icon"
          />
          Login With Google
        </button>

        
        <div style={{ marginTop: '20px', color: '#999' }}>
          <a href="#" style={{ color: '#1e3c72', textDecoration: 'none' }}>Terms of Service</a>  •  
          <a href="#" style={{ color: '#1e3c72', textDecoration: 'none' }}> Privacy Policy</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login