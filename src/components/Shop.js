import React from "react";
import ProductList from "./Shop/ShopProductList";
import Cart from "./Shop/ProductCard";
const Shop = () => {
  return (
    <div className="container-shop">
      <div className="menu-shop">
        <div className="menu-shop-name">
          <div className="menu-shop-name-type">Hiệu giày: </div>
          <div className="menu-shop-name-type-set">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="menu-shop-name">
          <div className="menu-shop-name-type">Hiệu giày: </div>
          <div className="menu-shop-name-type-set">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="menu-shop-name">
          <div className="menu-shop-name-type">Hiệu giày: </div>
          <div className="menu-shop-name-type-set">
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="shop-cart">
          {" "}
          <Cart />
          <Cart /> <Cart />{" "}
        </div>
      </div>
      <div className="product-shop">
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
