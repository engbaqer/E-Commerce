import "./nav.css";
import React, { useState } from "react";
import Logo from "../Assets/logo_big.png";
import Cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
function nav() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [underline, setunderlin] = useState("shop");
  return (
    <>
      <div className="nav">
        <div className="logo_section">
          <img src={Logo} alt="" />
          <p>BeqoShop</p>
        </div>
        <div className="mnu">
          <ul>
            <li
              onClick={() => {
                setunderlin("shop");
              }}
            ><Link to="/">
              shop</Link> {underline === "shop" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setunderlin("men");
              }}
            >
             <Link to='/men'> men</Link> {underline === "men" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setunderlin("women");
              }}
            >
             <Link to='/women'> women</Link> {underline === "women" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setunderlin("kids");
              }}
            >
             <Link to='/kids' style={{ textDecoration: 'none', color: 'inherit' }}> kids </Link> {underline === "kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className="right_section">
        <Link to='/login'>  <button>login</button></Link>
          <Link to='/cart'><img src={Cart_icon} alt="" /></Link>
          <div className="counter">1</div>
        </div>
      </div>

      <hr  className="hr_nav"/>
    </>
  );
}
export default nav;
