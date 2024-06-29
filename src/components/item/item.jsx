import React from "react";
import './item.css'
import { Link } from "react-router-dom";
function item(props) {
    return(
    <div className="item">
       <Link to={`/${props.id}`}> <img src={props.image} alt="pleace wait" onClick={window.scroll(0,0)} /></Link>
        <p>{props.name}</p>
        <div className="props_prices">
<div className="new_prices">
    {props.new_price}$
</div>
<div className="old_prices">
    {props.old_price}$
</div>
        </div>
    </div>

    )
}
export default item