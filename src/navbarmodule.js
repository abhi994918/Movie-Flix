import React, { Component } from "react";
import style from "./navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={style.Nav}>
        <div className={style.Title}>Movie-App</div>
        <div className={style.CartIconContainer}>
          <img
            className={style.CartImg}
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
          />
          <span className={style.CartCount}>0</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
