import { UseSelector, useSelector } from "react-redux";
import FoodItem from './FoodItem';
const Cart = () =>{
    const carditems = useSelector((store)=> store.cart.items);
   // console.log(carditems);
    return(
        <>
        <h1 className="text-3xl font-bold">Cart</h1>
       {carditems.map(item =><FoodItem key={...item.item.card.info.id} {...item.item.card.info}/>) }
      {/* <FoodItem {...carditems[0].item.card.info}/>*/}
        </>
    );
};
export default Cart;