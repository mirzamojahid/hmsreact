import React, { useEffect, useState } from 'react'
import logo from '../src/diulogo.png';
import { useNavigate } from "react-router";
import {fetchToken }from '../src/Auth'
export default function Navbar(props) {
  const [isLogin,setIsLogin]=useState();
  const navigate = useNavigate();
  const signout=()=>{
    localStorage.removeItem("hmsauthtoken");
  return navigate("/login")
  }
  
  useEffect(()=>{
    if(fetchToken.length ===null){
      setIsLogin(false);
    }else{
     
      setIsLogin(true);
    
    } 
    console.log(324567);
  },[isLogin]);


  
  return (
    <div style={{height:"60"}}>
      <nav >
         <img onClick={()=>{
          return navigate("/")
         }} src={logo} alt="logo" width={160} style={{marginLeft:"10px",color:"blue",cursor:"pointer"}}  />
         <div style={{display:"flex",alignItems: "center"}} >
         <ul  style={{display:"flex"}} >
     
         <li onClick={()=>{
             navigate("/");
          }}>Home</li>
    
            <li  onClick={()=>{
             navigate("/hallfacilities");
          }}>Hall Facilities</li>
            <li  onClick={()=>{
             navigate("/roomfacilities");
          }} >In-room Facilities</li>
            <li  onClick={()=>{
             navigate("/contact");
          }}>Contact</li>
            <li  onClick={()=>{
             navigate("/fag");
          }}>FAG</li>

          </ul>

          {fetchToken()==null?<div className='button' onClick={()=>{
             navigate("/login");
          }}>Login</div>:<div className='button' onClick={()=>{
              signout();
          }}>Signout</div>}
        
         </div>

      </nav>
    </div>)

  
}

