import React,{useState} from 'react'
import Card from "./ProductCard";
import Product from "./Product";
import DialogProduct from "./DialogProductCard";
function ShopProductList() {
  const [showInfo,setShowInfo] =useState(false);
  const datashow = (a) =>{
    setShowInfo(!showInfo);
  }
  return (
    <div className="list-product">
      <Product  datashow={datashow} />
    {showInfo ? <DialogProduct showInfo={showInfo} /> : ""}
    </div>
  )
}

export default ShopProductList