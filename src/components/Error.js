import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err);
    console.log(err.status);
    return(
        <>
        <h1>OOPS</h1>
        <h2>Something went wrong</h2>
        <h3>{err.status}</h3>
        </>
    )
}
export default Error;