/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../components/CheckOut/CheckOut.css";
import Item from "../components/CheckOut/Item";
import Discount from "../components/CheckOut/Discount";
import Cash from "../components/CheckOut/Cash";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
function CheckOutForm() {
  const database = [
    {
      itemInfo:
        'Laptop ASUS ROG Strix G G531GT-AL017T (15" FHD/i7-9750H/8GB/512GB SSD/GTX 1650/Win10/2.3 kg)',
      itemImg: "./image/Laptop1.jpg",
      itemPrice: 27000000,
      qualityRemain: 3,
      count: 1,
      itemImgDiscount: "./image/laptop2.jpg",
      discountInfo:"x1 Túi đựng laptop 15''"
    },
    {
      itemInfo:
        'Smart Tivi Samsung 4K 43 inch UA43RU7200KXXV',
      itemImg: "./image/Screen1.jpg",
      itemPrice: 7500000,
      qualityRemain: 3,
      count: 1,
      itemImgDiscount: "./image/Screen2.jpg",
      discountInfo: "x1 Khung mâm nghiêng - Từ 19” - 42″ M43N''"
    },
  ];

  let totalPrice = 0;
  database.forEach((x) => {
    totalPrice += x.itemPrice * x.count;
  });

  const [cashTotal, setCashTotal] = useState<number>(totalPrice);

  const setCashChange = (price: number) => {
    console.log(price);
    setCashTotal(price + cashTotal);
  };
  return (
    <>
      <div className="checkout">
        <div className="row">
          <div className="col-md-8 header_title">Giỏ hàng</div>
          <div className="col-md-4 header__delete">Col4</div>
        </div>
        <div className="row checkout__header">
          <div className="row col-md-8">
            <div className="col-md-8 header__title">
              Giỏ hàng của bạn (2 sản phẩm)
            </div>
            <div className="col-md-4 text-right p-0">
              <button className=" header__delete ">Xóa tất cả</button>
            </div>
          </div>
        </div>
        <div className="row checkout__content">
          <div className="col-md-8 card-block checkout__item">
            {database.map((x) => (
              <Item
                itemInfo= {x.itemInfo}
                itemImg={x.itemImg}
                itemPrice={x.itemPrice}
                qualityRemain={x.qualityRemain}
                count={x.count}
                itemImgDiscount={x.itemImgDiscount}
                discountInfo={x.discountInfo}
                priceChange={setCashChange}
              />
            ))} 
          </div>
          <div className="col-md-4">
            <Discount />
            <Cash cashTemp={cashTotal} cashTrans={0} cashDiscount={0} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOutForm;
