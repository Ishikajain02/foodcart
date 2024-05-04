import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'
import {url} from "../utils/constant";

const Carousel = () => {
    const[carousel,setcarousel]=useState([]);
    useEffect(()=>{
       // console.log("data");
        getitem();
    },[])
    const[num,setnum]=useState(0);
    function nextslide(){
        if(carousel.length-8==num)return false;
        setnum(num+3);
    }
    function prevslide(){
          if(num==0)return false;
          setnum(num-3);
    }
    async function getitem(){
        const data= await fetch(url);
        const data2=await data.json();
        setcarousel(data2.data?.cards[0].card.card?.imageGridCards?.info);
    }
 // console.log(carousel);
  return (
    <div className=' flex  flex-col h-[15rem] w-[85rem]'>
      <div className='flex flex-row justify-between'>
        <h4 className='font-bold text-2xl'>What's on your mind ?</h4>
        <div className='flex '>
        <div className='mr-3 cursor-pointer'onClick={prevslide}><FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#e2e2e7",height:"40"}} /></div>
        <div className='cursor-pointer'onClick={nextslide}><FontAwesomeIcon icon={faCircleArrowRight} style={{height:"40",color: "#e2e2e7"}} /></div>
        </div>
        </div>
        {/*console.log(carousel[0].imageId)*/}
        <div className='flex   h-52 w-[85rem] overflow-hidden'>
        {carousel.map((item)=>{
        return<div className=' shrink-0 duration-500 ' style={{transform:`translateX(-${num*100}%)`}}> <CarouselItem key={item.id} imageId={item.imageId}/></div>
      
        })}
        <CarouselItem/>
        </div>
        
        
        Carousel
    </div>
  )
}

export default Carousel