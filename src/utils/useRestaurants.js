import {useState,useEffect} from 'react';
import {MENU_API} from "./constant";
const useRestaurants=(id) =>{
    const [resInfo,setresInfo] = useState(null);
    useEffect(()=>{
        getRestaurants();
        },[])
      async function getRestaurants(){
            const data = await fetch(MENU_API + id);
            const data2 = await data.json();
            const {name} =data2?.data?.cards[0]?.card?.card?.info;
            console.log(name);
            setresInfo(data2);
        }
 return resInfo;
}
export default useRestaurants;