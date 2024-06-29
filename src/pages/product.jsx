/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import { Shopcontext } from '../context/shopcontext'
import { useParams } from 'react-router-dom';
import './css/product.css'
import Relatedproduct from '../components/relatedproduct/relatedproduct';

function product() {
     const {all_product,addTocart}=useContext(Shopcontext);
     
    const {productId}=useParams();


    const product = all_product.find((e)=>e.id === Number(productId))
    return(
<>
<div className='prodact_disply'>
<div className="section">
    <div className="imaglist">
       
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
    </div>
    <div className="mainimag"><img src={product.image} alt="" />
    <div className="info">
 <p className='name'>{product.name}</p>
        <div className="props_prices_product">
<div className="new_prices_product">
    {product.new_price}$
</div>
<div className="old_prices_product">
    {product.old_price}$
</div>
<button onClick={()=>{addTocart(product.id)}}>add to cart</button>
</div></div></div>

</div>

</div>
       <Relatedproduct/></>
    )
    
}


export default product;