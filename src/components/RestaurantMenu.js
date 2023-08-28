import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import url from "../utils/constant";
const RestaurantMenu =()=>{
 const {id } = useParams();
 const [restaurant , setRestaurant] =useState({});
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
        const data = await fetch(url);
        const data2 = await data.json();
        setRestaurant(data2);
    }
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