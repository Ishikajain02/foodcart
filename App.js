import React, { Children, Suspense , useState,useContext,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {Outlet, Switch} from "react-router-dom";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Footer from "./src/components/Footer";
import {lazy,Suspense} from 'react';
import Shimmer from "./src/components/Shimmer";
import {UserContext} from "./src/utils/UserContext";
//import InstaMart from "./src/components/InstaMart"; Do not import like this use lazy loadig/dynamic loading
const SwiggyMart = lazy(() =>import ("./src/components/SwiggyMart"));
const Trying = lazy(()=> import("./src/components/Trying"));
/***
 * layout 
 *  header 
 * logo
 * links
 * 
 * body
 * search
 * cards 
 *  footer
 * links 
 * copywrite 
 * 
 */
const Applayout = () =>{
   const[user,setuser] = useState({
    name: "Ishika",
    gmail:"abc@gmail"
   })
  // useEffect(() => {
    // Make an API call and send username and password
    //const data = {
      //name: "Akshay Saini",
    //};
    //setuser(data.name);
  //}, )
    console.log("hiee")
    return(
    <>
     
     <UserContext.Provider value ={{user:user,setuser:setuser}}>
     <Header />
     <Outlet/>
     <Footer/>
     </UserContext.Provider>
   
     </>
    
    )    
}
const appRouter = createBrowserRouter([
    {
    path : "/",
    element :<Applayout/>,
    errorElement:<Error/>,
    children :[{
        
            path:"/about",
            element:<About name="Ishuika" />
            

    },{
      path:"/contact",
      element:<Contact/>
    },
{

    path:"/",
    element:<Body/>
},
{
     
    path:"/restaurants/:id",
    element:<RestaurantMenu/>,

},{
    path:"/swiggymart",
    element:<Suspense fallback= {<Shimmer/>}><SwiggyMart/></Suspense>
},{
    path:"/trying",
    element:<Suspense><Trying/></Suspense>
}

]
        

    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
/*
things to improve 
*after rendering diff component header disappear
* to fix not find restaurant
* to improve shimmer
*to improve error page
* change routing

*/