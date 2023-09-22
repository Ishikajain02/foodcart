import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import {MENU_API} from "../utils/constant";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";

import { useDispatch } from "react-redux";
const RestaurantMenu =()=>{
 const {id } = useParams();
 const resInfo = useRestaurants(id);
 const dispatch = useDispatch();
 const handlechange =()=>{
  dispatch(addItem("pineapple"));
 }
 //const [resInfo , setresInfo] =useState(null);
  //  const id = params.id;
   // const name = params.name;
    //const areaName = params.areaName;
   // const locality = params.locality;

  //  console.log(params);
  console.log(id);
   // console.log(areaName);
 
    if(resInfo== null)return <Shimmer/>
 //   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
   const {name,cuisines ,costForTwoMessage,cloudinaryImageId} = resInfo?.data?.cards[0]?.card?.card?.info;
   console.log(name);
   //console.log(name);
    const{itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //const{itemCards} = resInfo?.cards[1]?.card?.card?.info;
    console.log(itemCards);
   //  console.log(name);

    return(
        <>
        
        <h1>Restaurant id : {id}</h1>
        <h2>{name}</h2>
        <h2>{cuisines.join()}</h2>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } />
        <h2>{costForTwoMessage}</h2>
        <button className="p-2 m-2 bg-green-400 " onClick={()=>{
          handlechange()
        }}>Add Item</button>
          {itemCards.map((item)=>{
               
               return<ul>
               <h3>{item.card.info.name}</h3>
               </ul>
          })}
        </>
    )
}
export default RestaurantMenu;