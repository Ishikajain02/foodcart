import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import {MENU_API} from "../utils/constant";
import Shimmer from "./Shimmer";
const RestaurantMenu =()=>{
 const {id } = useParams();
 const [resInfo , setresInfo] =useState(null);
  //  const id = params.id;
   // const name = params.name;
    //const areaName = params.areaName;
   // const locality = params.locality;

  //  console.log(params);
  console.log(id);
   // console.log(areaName);
  useEffect(()=>{
    getRestaurants();
    },[])
  async function getRestaurants(){
        const data = await fetch(MENU_API + id);
        const data2 = await data.json();
        const {name} =data2?.data?.cards[0]?.card?.card?.info;
        console.log(name);
        setresInfo(data2);
    }
    if(resInfo== null)return <Shimmer/>
 //   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
   const {name,cuisines ,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
   console.log(name);
   //console.log(name);
    const{itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //const{itemCards} = resInfo?.cards[1]?.card?.card?.info;
    console.log(itemCards);
   //  console.log(name);

    return(
        <>
        
        <h1>Restaurant id : {id}</h1>
      {/*  <h2>{restaurant.areaName}</h2>
        <h2>{restaurant.locality}</h2>
        <h2>{restaurant.name}</h2>
    <h3>{restaurant.avgRating}</h3>*/}
        </>
    )
}
export default RestaurantMenu;