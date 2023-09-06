 import {useState} from 'react';
 import { Link } from 'react-router-dom';  
 
 const Tittle = () =>{
   
    return(
        <>
       
        <img  className ="h-28 p-2" alt = "text" src = "https://assets.materialup.com/uploads/578c1723-1046-4fb9-b068-10715210d08d/preview.jpg"/>
        
        
    </>
    )
}
const Header = () =>{
    console.log("hi from header")
    const[IsLoggedIn,setIsLoggedIn] = useState(true);
    return(
    
    <div className ="flex ">
    
    <Tittle />
    <div className = "px-2 flex py-5 justify-between">
   <ul className="flex py-10 px-2 ">
    <li className="px-4"><Link to="/">Home</Link></li>
    {/*<li><a href ="/about">About Us</a></li>*/}
    <li className="px-4">    <Link to ="/about">About Us</Link></li>
    <li className="px-4"><Link to="/cart">Cart</Link></li>
    <li className="px-4"> <Link to ="/contact">Contact Us</Link></li>
    <li className="px-4"><Link to ="/instamart">Instamart</Link></li>
    <li className="px-4"><Link to ="/trying">Try</Link></li>
   </ul>
    {(IsLoggedIn) ? <button onClick={()=> setIsLoggedIn(false)}>Login</button> : <button onClick={()=> setIsLoggedIn(true)}>Logout</button>}
    </div>
    </div>
    )
}
export default Header;