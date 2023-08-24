import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);