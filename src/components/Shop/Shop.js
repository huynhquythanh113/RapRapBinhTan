import React from "react";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="border-components shop">
      <div className="name-components">Shop</div>
      <div className="product-sell">
        <div className="products">
          {" "}
          <img
            style={{ width: "200px", height: "200px" }}
            src={process.env.PUBLIC_URL + `Img/img1.jpg`}
          />{" "}
          <div className="name-product">Shoe strongger</div>
          <div className="price-product">
            <div className="pricesale-product"> 100000 </div>
            => 100000 USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
