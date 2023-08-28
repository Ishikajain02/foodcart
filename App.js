import React, { Children } from "react";
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
    console.log("hiee")
    return(
    <>
     <Header />
     <Outlet/>
     <Footer/>
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
            element:<About/>
            

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