import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';  
import {UserContext} from '../utils/UserContext';
import {  useSelector } from 'react-redux';
import Cart from './Cart';
 const Tittle = () =>{
   
    return(
        <>      

        <img  className ="h-28 p-2" alt = "text" src = "https://assets.materialup.com/uploads/578c1723-1046-4fb9-b068-10715210d08d/preview.jpg"/>
        
        </>
    )
}
const Header = () =>{
    
    const {user,setuser} = useContext(UserContext);
   // console.log(user);
   const cardItems = useSelector((store)=>store.cart.items);
    console.log("hi from header")
    console.log(cardItems);
    const[IsLoggedIn,setIsLoggedIn] = useState(true);
    return(
    
    <div className ="flex ">
    
    <Tittle />
    <div className = "px-2 flex py-5  items-center bg-orange-500 w-full h-28">
   <ul className="flex py-10 px-2 items-center">
    <li className="px-4"><Link to="/">Home</Link></li>
    {/*<li><a href ="/about">About Us</a></li>*/}
    <li className="px-4">    <Link to ="/about">About Us </Link></li>
    <li className="px-4"><Link to="/cart">Cart - {cardItems.length} items</Link></li>
    <li className="px-4"> <Link to ="/contact">Contact Us</Link></li>
    <li className="px-4"><Link to ="/swiggymart">Instamart</Link></li>
    <li className="px-4"><Link to ="/trying">Try </Link></li>
    
   </ul>
    {(IsLoggedIn) ? <button onClick={()=> setIsLoggedIn(false)}>Login</button> : <button onClick={()=> setIsLoggedIn(true)}>Logout</button>}
    <input className = "px-4"type ="text" value={user.name} onChange={ (e) => setuser( {name:e.target.value ,gmail:"helloooneww"}) }></input>
    </div>
    </div>
    )
}
export default Header;