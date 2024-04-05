import { UseSelector, useDispatch, useSelector } from "react-redux";
import FoodItem from './FoodItem';
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const carditems = useSelector((store)=> store.cart.items);
   // console.log(carditems);
   const dispatch=useDispatch();
    return(
        <>
        <h1 className="text-3xl font-bold">Cart</h1>
       {carditems.map(item =><FoodItem key={item.item.card.info.id} {...item.item.card.info}{...item}/>) }
      {/* <FoodItem {...carditems[0].item.card.info}/>*/}
      <button className="p-2 m-2 bg-red-400" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </>
    );
};
export default Cart;
/**
 * add clear cart functionality
 */