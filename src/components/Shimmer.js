const Shimmer = () =>{
    return(
        <>
        <div className="restaurant-list"> 
       { Array(10).fill("").map((e,index) =>{return(<div className="card-shimmer"></div>)})}
       {/* {Array(10).fill("").map((e,index) =>{
      <div key ={index} className="card-shimmer"></div>
        })} */}   
      </div>
      </>
    );
};

export default Shimmer;