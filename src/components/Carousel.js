import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import CarouselItem from './CarouselItem'
import {url} from "../utils/constant";

const Carousel = () => {
    const[carousel,setcarousel]=useState([]);
    useEffect(()=>{
        console.log("data");
        getitem();
    },[])
    async function getitem(){
        const data= await fetch(url);
        const data2=await data.json();
        setcarousel(data2.data?.cards[0].card.card?.imageGridCards?.info);
    }
  console.log(carousel);
  return (
    <div className=' flex  flex-col h-[15rem] w-[85rem]'>
      <div className='flex flex-row justify-between'>
        <h4 className='font-bold text-2xl'>What's on your mind ?</h4>
        <div className='flex '>
        <div className='mr-3'><FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#e2e2e7",height:"40"}} /></div>
        <div className=''><FontAwesomeIcon icon={faCircleArrowRight} style={{height:"40",color: "#e2e2e7"}} /></div>
        </div>
        </div>
        {/*console.log(carousel[0].imageId)*/}
        <div className='flex flex-row  flex-nowrap overflow-hidden overflow-x-scroll h-52 w-[85rem]'>
        {carousel.map((item)=>{
        return<div className='flex-grow-1 shrink-0'> <CarouselItem key={item.id} imageId={item.imageId}/></div>
      
        })}
        <CarouselItem/>
        </div>
        
        
        Carousel
    </div>
  )
}

export default Carousel