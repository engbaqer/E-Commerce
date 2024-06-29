import React from "react";
import Item from "../item/item";
import data_product from "../Assets/data";
import './relatedproduct.css'

function relatedproduct() {

    return (
        <div className="relatedproduct">
         <h1>Telated product</h1>
         <hr />
         <div className="relatedproduct_item">
           { data_product.map((item,i)=>{
            return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
           })}
           
         </div>
        </div>
    )
}
export default relatedproduct