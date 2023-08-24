import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
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
     <Body/>
     </>
    
    )    
}
const appRouter = createBrowserRouter([
    {
    path : "/",
    element :<Applayout/>,
    errorElement:<Error/>

    },
    {
    path:"/about",
    element:<About/>
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);