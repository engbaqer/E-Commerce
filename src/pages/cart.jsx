import React , {useContext} from'react'
import { Shopcontext } from '../context/shopcontext';
import remove_icon from '../components/Assets/cart_cross_icon.png';
import './css/cart.css'
function cart() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {all_product,removTocart,cartItem}=useContext(Shopcontext);

  
  return (
    <div className='cart'>
      <div className="format-main">
      <p>products</p>
      <p>title</p>
      <p>price</p>
      <p>Quantity</p>
      <p>total</p>
      <p>remove</p>
      </div>
       <hr />
      {all_product.map((e) => {
        if(cartItem[e.id]>0)
          {
          return  <div>
            <div className='cartitems-format format-main'>
              <img src={e.image} alt="" className='icon1' />
              <p>{e.name}</p> 
              <p>{e.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[e.id]}</button>
              <p>{e.new_price*cartItem[e.id]}</p>
              <img src={remove_icon} alt='' className='remove_icon'  onClick={()=>{removTocart(e.id)}}/>
            </div>
           </div>
          }
          else{return null}
        
      })}
     </div>
 )
}

export default cart