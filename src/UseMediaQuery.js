import { useState,useCallback,useEffect } from "react";

const UseMediaQuery =(innerWidth)=>{
    const [targetReached,setTargetReached] =useState(false);

    const updateTarget = useCallback((e)=>{
        if(e.matches){
setTargetReached(true);
        }else{
            setTargetReached(false);
        }
    },[]);

    useEffect(()=>{
       
            const media = window.matchMedia(`(max-width:${innerWidth}px)`);
            media.addListener(updateTarget);
            if(media.matches){
                setTargetReached(true);
            }

            return ()=>media.removeListener(updateTarget);
        
    },[innerWidth, updateTarget]);
    return targetReached;

}

export default UseMediaQuery;