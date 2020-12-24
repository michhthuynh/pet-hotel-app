import React, { ChangeEvent } from "react";
import { useState } from "react";
interface props {
  itemInfo: string;
  itemImg: string;
  itemPrice: number;
  qualityRemain: number;
  count: number;
  itemImgDiscount: string;
  discountInfo: string;
  priceTotal: (price: number) => void;
}
function Item({
  itemInfo,
  itemImg,
  itemPrice,
  qualityRemain,
  count,
  itemImgDiscount,
  discountInfo,
  priceTotal,
}: props) {
  const [isMaximum, setIsMaximum] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(count);

  
  const subAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      priceTotal((amount - 1) * itemPrice);
    }
    setIsMaximum(false);
  };

  const addAmount = () => {
    if (amount < qualityRemain) {
      setAmount(amount + 1);
      priceTotal((amount + 1) * itemPrice);
    }
    if (amount === qualityRemain) setIsMaximum(true);
  };

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
    priceTotal(+e.target.value * itemPrice);
    if (+e.target.value > qualityRemain) {
      setIsMaximum(true);
      setAmount(qualityRemain);
      priceTotal(+e.target.value * itemPrice);
    } else setIsMaximum(false);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(price);
  return (
    <>
      <div className="row col-md-12 item__container">
        <div className="col-md-8 row p-0">
          <div className="col-md-3" style={{ height: 80, width: 80 }}>
            <img className="item--img" src={itemImg} alt="" />
          </div>
          <div className="col-md-9 p-0">
            <p>{itemInfo}</p>
            <div className="info--SKU">SKU: 190800315</div>
          </div>
        </div>
        <div className="col-md-2 ">
          <div className="item__quantity">
            <div className="quantity--container">
              <button onClick={subAmount} className="quantity--button col-md-4">
                <span className="quantity--sub">-</span>
              </button>
              <input
                type="text"
                onChange={changeAmount}
                className="quantity--count col-md-4"
                value={amount}
              />
              <button onClick={addAmount} className="quantity--button col-md-4">
                <span
                  className="quantity--add"
                  {...(isMaximum ? "" : "disabled")}
                >
                  +
                </span>
              </button>
            </div>
            <div className={`quantity--mess ${isMaximum ? "" : "disabled"}`}>
              Chỉ còn {qualityRemain} sản phẩm
            </div>
          </div>
        </div>
        <div className="col-md-2 quantity__price p-0">
          {formatPrice(itemPrice)}
        </div>
        <div className="col-md-7 mt-1 item__discount">
          <img className="discount--img" src={itemImgDiscount} alt="" />
          <div className="discount--info m-1">{discountInfo}</div>
        </div>
      </div>
    </>
  );
}

export default Item;
