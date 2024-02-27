import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
        <>
        <div className="bg-orange-500 h-[4.5rem]">

        
        <h1>Footer</h1>
        <h1>{user.name}</h1>
        <h1>{user.gmail}</h1>
        </div>
        </>
    )
}
export default Footer;