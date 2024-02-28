import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
        <>
        <div className="bg-black text-white shadow-lg h-[4.5rem] justify-center items-center flex">

        
        {/*<h1>Footer</h1>
        <h1>{user.name}</h1>
        <h1>{user.gmail}</h1>*/
    }
    <h3 className="justify-center items-center">Created with ❤ By Ishika Jain</h3>
        </div>
        </>
    )
}
export default Footer;