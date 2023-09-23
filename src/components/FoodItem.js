//import { UseSelector, useSelector } from "react-redux";
const FoodItem = ({
    
    name,
    cuisines,
    areaName,
    imageId,
    price,
    description

}) =>{
    return(
        <>
        
      
        <div className="card ">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId } />
         <h2>{name}</h2>
         <h4>{cuisines}</h4>
         <h4>{areaName}</h4>
         <p>{description}</p>
         <h4>{price/100}</h4>
      </div>
        
        
        </>
    )
}
export default FoodItem;