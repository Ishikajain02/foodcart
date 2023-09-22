import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
const Footer =()=>{
    const {user} = useContext(UserContext);
    return(
        <>
        <h1>Footer</h1>
        <h1>{user.name}</h1>
        <h1>{user.gmail}</h1>
    
        </>
    )
}
export default Footer;