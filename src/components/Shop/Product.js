import React, { useState } from "react";

const Product = ({ datashow }) => {
  return (
    <div className="product-shop-cart" onClick={() => datashow(1)}>
      <div className="product-shop-img">
        {" "}
        <img
          className="TeamInfoRight-img"
          src={process.env.PUBLIC_URL + `Img/img1.jpg`}
          alt=""
        />{" "}
      </div>
      <div className="product-shop-info">
        <div className="product-shop-info-name">Giay the thao bong da</div>
        <div className="product-shop-info-price">200.000 đ </div>
      </div>
      <div className="product-shop-btn">
        <button> Chọn</button>
      </div>
    </div>
  );
};

export default Product;
