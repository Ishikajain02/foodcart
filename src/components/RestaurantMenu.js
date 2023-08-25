import { useParams } from "react-router-dom";

const RestaurantMenu =()=>{
    const params = useParams();
    const id = params.id;
    console.log(params);
    console.log(id);
    return(
        <>
        <h1>Restaurant id : {id}</h1>
        </>
    )
}
export default RestaurantMenu;