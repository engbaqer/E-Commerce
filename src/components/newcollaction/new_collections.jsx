import React from "react";
import Item from "../item/item"
import data_product from '../Assets/new_collections'
import './newcollaction.css'

function new_collections() {
    return(
        <div className="popular">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />})}
            </div>
        </div>
    )
    
}
export default new_collections