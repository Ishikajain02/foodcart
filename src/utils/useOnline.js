import { useState,useEffect } from "react";


const useOnline=()=>{
    const[isOnline,setisOnline] =useState(navigator.onLine);
    //doubt regarding true , false;
    const handleOnline =()=>{
        setisOnline(true);
    }
    const handleOffline=()=>{
        setisOnline(false);
    }
   useEffect(()=>{
    window.addEventListener(('online'),()=>{
        setisOnline(true);
    });
    window.addEventListener(('offline'),()=>{
        setisOnline(false);
    });
    return()=>{
        window.removeEventListener(('offline'),()=>{
           setisOnline(false);
        })
        window.removeEventListener(('online'),()=>{
           setisOnline(true);
        })
       }
    },[])
    console.log(navigator.onLine);
    console.log(isOnline);
    {/*useEffect(()=>{
        if(isOnline)setisOnline(true);
        if(!isOnline)setisOnline(false);
    },[])*/}
    
    return isOnline;
}
export default useOnline;