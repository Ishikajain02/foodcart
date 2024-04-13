/*const CarouselItem=({
    imageId
})=>{
    return(
<div className="flex ">
<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId }className="rounded-full w-40 h-40"></img>

</div>
)}
export default  CarouselItem;*/
import React from 'react';

const CarouselItem = ({ imageId }) => {
    const baseURL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    if (!imageId) {
        console.log("I am NULL");
        return null; // Skip rendering if imageId is undefined
    }
    return (
        <div className="flex">
            <img src={baseURL + imageId} className="rounded-full w-40 h-40" alt="carousel-item" />
        </div>
    );
};

export default CarouselItem;
