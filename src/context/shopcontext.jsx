/* eslint-disable no-unused-vars */
import React,{createContext, useState} from "react";
import all_product from '../components/Assets/all_product'
function getdeffultcart() {
    let cart={};
for(let i=0 ; i<all_product.length ; i++){
cart[i]=0
}

return cart;
}
export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
    
const [cartItem,setcartItem] = useState(getdeffultcart());
console.log(cartItem)
const addTocart=(itemId)=>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItem)
}
const removTocart=(itemId)=>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    console.log(cartItem)
}
    const contextValue={all_product,addTocart,cartItem,removTocart};

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopcontextProvider;