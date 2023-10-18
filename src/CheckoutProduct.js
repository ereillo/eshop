import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
      <div className="checkoutProduct">
       <img src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1697630311/FU9521_sivasdescalzo-Adidas-SUPERSTAR-1610547754-1_acmvrw.webp"
        alt="" className="checkoutProduct_image"/>

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">Adidas Superstar Colors 2020 - Las mejores zapatillas del mundo</p>
            <p className="checkoutProduct_price">
            <strong>20</strong>
                   <small>€</small>
            </p>
            <div className="checkoutProduct_rating">
            ⭐⭐
            </div>
            <button>Remove from basket</button>
        </div>
      </div>
  );
}

export default CheckoutProduct;
