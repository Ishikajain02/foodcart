import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
const RestaurantCard = ({
    name,
    cuisines,
    areaName,
    cloudinaryImageId,
    avgRatingString,
    lastMileTravel,
    costForTwo
}) =>{
    
    return(
        <div className="card  flex flex-col flex-wrap ">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId } />
         <h2>{name}</h2>
       {/*  <div className="flex flex-wrap w-full">*/}
         <h4 className="">{cuisines}</h4>
         
         <h4>{areaName}</h4>
         <span>
         <h4 style={{ backgroundColor: avgRatingString >= 4.2 ? "green" : "red" }}>
         <FontAwesomeIcon icon={faStar}/>{avgRatingString}</h4>
           <h4>{lastMileTravel}</h4>
       <h4>{costForTwo}</h4>
         </span>
      </div>
       
   
        
    )
}
export default RestaurantCard;