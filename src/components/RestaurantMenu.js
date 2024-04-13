import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import {MENU_API} from "../utils/constant";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faMinus } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from "react-redux";
import Menucard from "./Menucard";
const RestaurantMenu =()=>{
 const {id } = useParams();
 const resInfo = useRestaurants(id);
 const dispatch = useDispatch();
 const clearAll=()=>{
  dispatch(clearCart());
 }
 const removeitemchange=()=>{
  dispatch(removeItem());
 }
 const handlechange =()=>{
  dispatch(addItem("pineapple"));
 }
 //const [resInfo , setresInfo] =useState(null);
  //  const id = params.id;
   // const name = params.name;
    //const areaName = params.areaName;
   // const locality = params.locality;

  //  console.log(params);
  //console.log(id);
   // console.log(areaName);
 
    if(resInfo== null)return <Shimmer/>
 //   const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
   const {name,cuisines ,costForTwoMessage,cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info;
   //console.log(name);
   //console.log(name);
   console.log(resInfo);
    const{itemCards} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards?.[1]?.card?.card;
  /*const{itemCards} = resInfo?.cards[1]?.card?.card?.info;
    console.log(itemCards);
   //  console.log(name);
*/
//const { cards } = resInfo?.data; // Destructure the cards array from the response

// Assuming the structure follows this pattern
//const itemCards = cards?.[4]?.card?.card?.tabs?.[1]?.content;
    return(
        <>
        <div className="">
        <div className="flex flex-row bg-black h-90 align-middle justify-center">
       
        <img className="h-[20rem] flex" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
        <div className="flex flex-col text-white m-2 p-20 text-xl text-justify ">
        <h1>Restaurant id : {id}</h1>
        <h2 className="text-4xl font-bold">{name}</h2>
        <h2>{cuisines.join()}</h2>
        <h2>{costForTwoMessage}</h2>
        </div>
        </div>
        <button className="p-2 m-2  bg-green-400 " onClick={()=>{
          handlechange()
        }}>Add Item</button>
        <button className="p-2 m-2 bg-red-400" onClick={()=>{
          removeitemchange()
        }}>Remove Item</button>
        <button className="p-2 m-2 bg-blue-400" onClick={()=>{
          clearAll()
        }}>Clear Cart</button>
        <div className="flex flex-col items-center justify-center">
         
          {itemCards&&itemCards.map((item)=>{
               
               return<ul className="border-spacing-10 m-2 p-2 border-gray-400 border-b-2 w-[50rem] flex flex-row justify-between " >
                <div className="flex flex-col w-[35rem]">
               <h3 className="font-bold text-xl" >{item.card.info.name}</h3> 
              {/* <h4 className="line-clamp-3" >{item.card.info.description}</h4>
             <span on onClick={}>Read more</span>*/}
             <Menucard description={item.card.info.description}/>
               </div>
               {/*const imageid=item.card.info.name.imageId;*/}
               <div className="flex flex-col ">
               <img className="h-30 w-32 flex justify-end items-end rounded-md"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}></img>
               <div className="flex flex-row justify-between mt-3 border border-s-2 rounded-md h-8 item-center">
               <button className="p-1 m-1 " onClick={()=>{
                dispatch(addItem({item}))
               }}>  <FontAwesomeIcon icon={faPlus}/></button>   <button className=" p-1 m-1"onClick ={()=>{
                dispatch(removeItem());
               }}> <FontAwesomeIcon icon={faMinus}/></button>
               </div>
               </div>
               
               </ul>
          })}
          </div>
          </div>
        </>
    )
}
export default RestaurantMenu;
/****
 * improve remove item logic
 */