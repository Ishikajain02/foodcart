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
    <div className=' flex  flex-col h-52 w-[85rem]'>
        <h4 className='font-bold text-2xl'>What's on your mind ?</h4>
        {/*console.log(carousel[0].imageId)*/}
        {carousel.map((item)=>{
        
         <CarouselItem key={item.id} imageId={item.imageId}/>
        })}
        <CarouselItem/>
        
        
        
        Carousel
    </div>
  )
}

export default Carousel