import React, { useState } from 'react'

const Menucard = ({description}) => {
   // console.log(description);
    const [isExpanded,setisExpanded]=useState(false);
    console.log(description);
  return (
  <>
 {
 description === undefined ? (
  <h4>{description}</h4>
) :(description && typeof description === 'string' && (description.length < 160 || description===undefined))?<h4>{description}</h4>:(
    <>
    <h4 className={isExpanded ? 'line-clamp-none' : 'line-clamp-2'}>
         {description}
         </h4>
     {!isExpanded && (
        <button
          className="text-blue-500 hover:text-blue-700 flex"
          onClick={() => setisExpanded(true)}
        >
          Read More
        </button>
      )}
    
 
    </>
  )
}
  </>
  )
}


export default Menucard;