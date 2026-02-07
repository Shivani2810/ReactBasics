import React from "react";
import './Item.css'

function Item(props)
{
    const itemName=props.itemName;

   return (
    <div>
       <p className="par">{itemName}</p>
       {props.children}
      
    </div>
    

    )
  
}
export default Item;
