import React from "react";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="left-product-card">
        {" "}
        <img
          className="TeamInfoRight-img"
          src={process.env.PUBLIC_URL + `Img/img1.jpg`}
          alt=""
        />{" "}
        <div className="left-name-product"> Giay the thao da banh </div>
      </div>
      <div className="right-product-card">
        <div className="product-card-price">Price: 169.000 </div>
        <div className="product-card-sale">Sale: No sale </div>
        <div className="product-card-amount">quanity: 3 </div>
        <div className="product-card-Total">Total: 169.000 </div>
      </div>
      <div className="btn-action-product-card">
        <button>+</button>
        <button>-</button>
        <button>X</button>
      </div>
      <div className="product-card-timeOrder"> Ngay tháng năm</div>
    </div>
  );
}

export default ProductCard;
