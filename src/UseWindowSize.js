
import { useState,useEffect } from "react";


export default function UseWindowSize(){
    const [size,setSize]=useState([1,1]);
   
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(()=>{
            setSize([window.innerHeight,window.innerWidth]);
              const handleResize=()=>{
                setSize([window.innerHeight,window.innerWidth]);
              }
     window.addEventListener("resize",handleResize);
        },[]);
       
    
    return size;
}
