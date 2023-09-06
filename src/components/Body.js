import React, { useState , useEffect } from "react";
import * as RestaurantList from "../utils/data";
import RestaurantCard  from "./RestaurantCard";
import {url} from "../utils/constant";
import useOnline from "../utils/useOnline";
import {Link} from 'react-router-dom';
import Shimmer from "./Shimmer";
function filterData(searchText,restaurants){
const filterdata = restaurants.filter((restaurant) =>{
 return     restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
 
});
  
  return filterdata;
}
// const RestaurantList = getu();

const Body =() =>{
  //{console.log("hi I m body")};
  const [allrestaurants , setallRestaurants] = useState([]);
  const [filterrestaurants, setfilterRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    console.log("re render");
    
  useEffect(() => {
    console.log("I am useefeect");
    getrestaurant();
    
    },[]);
  async function getrestaurant (){
    const data = await fetch(url);
    const data2 = await data.json();
    console.log(data2);
    console.log(data2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
    setallRestaurants(data2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestaurants(data2?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
 // const offline = useOnline(false);
 const offline = useOnline();
 if(!offline)
 return <h1>I am offline</h1>
  if(!allrestaurants) return null;
  //if(filterrestaurants.length===0) return <h1>Sorry not enough data</h1>;
    return (allrestaurants.length ===0)? <Shimmer/> :(
    <>
      <h1 className='font-bold'>Hellluuu</h1>
        <div className="search">
        <input type="text" placeholder ="Search" value = {searchText} 
         onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const data = filterData(searchText, allrestaurants);
            setfilterRestaurants(data);
          }
        }}
        
        
        onChange={(e) => setSearchText(e.target.value)} ></input>
        
        <button  className = "btn" type ="button" onClick={()=>{
          const data = filterData(searchText,allrestaurants);
          setfilterRestaurants(data);
        }} > Submit</button>
        
        </div>
    <div className="restaurant-list">
  
    {filterrestaurants.map((restaurant) =>{
      
      return <Link    key={restaurant.info.id}
      to={"/restaurants/" + restaurant.info.id}>  <RestaurantCard key ={restaurant?.info?.id} {...restaurant?.info}/> ;
     </Link>
    })}
  </div>
    </>
    );
};
export default Body;