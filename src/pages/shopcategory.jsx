/* eslint-disable no-undef */
import { useContext } from "react";
import React  from "react";
import { Shopcontext } from "../context/shopcontext";
import Item from "../components/item/item";
import './css/shopcategory.css'

function Shopcategory(props) {
    const {all_product}=useContext(Shopcontext);

    return(
        <div className="shop-category">
<img src={props.banner} alt="" />
<div className="popular-item">
    {/* "popular-item" this class in new clollaction css file  */}
    {all_product
  .filter(item => props.category === item.category)
  .map((item, i) => (
    <Item
      key={i}
      id={item.id}
      name={item.name}
      image={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
    />
  ))}
            </div>
        </div>
    )
    
}
export default Shopcategory;