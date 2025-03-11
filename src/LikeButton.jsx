import { useState } from "react";

export default function LikeButton(){
   const[isLiked,setisLiked] =useState(false);
   const[count,setCount]= useState(0);
       function toggleLike(){
        setisLiked(!isLiked);
        setCount(count+1);
       }
       let styleLike={color:"red"};
        
    return(
        <div>
            <h3>Count={count}</h3>
            <p onClick={toggleLike}>{isLiked ? 
            (<i className="fa-solid fa-heart" style={styleLike}></i>):(
            <i className="fa-regular fa-heart"></i>)}</p>
        </div>
        
    );
}