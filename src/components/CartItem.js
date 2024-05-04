import React from 'react'
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
const CartItem = ({
    
    name,
    cuisines,
    areaName,
    imageId,
    price,
    description,item

}) =>{
    const dispatch=useDispatch();
    
  return  (
    <div>    
    <div className="card ">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId } />
     <h2>{name}</h2>
     <h4>{cuisines}</h4>
     <h4>{areaName}</h4>
     {/*<p>{description}</p>*/}
     <h4>{price/100}</h4>
     <div className="flex">
     <button className="p-1 m-1 " onClick={()=>{
            dispatch(addItem({item}))
           }}>  <FontAwesomeIcon icon={faPlus}/></button>   <button className=" p-1 m-1"onClick ={()=>{
            dispatch(removeItem());
           }}> <FontAwesomeIcon icon={faMinus}/></button>
  </div>
  </div>
    </div>
  )
}

export default CartItem