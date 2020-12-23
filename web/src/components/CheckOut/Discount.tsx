
import React, { ChangeEvent } from "react";
import { useState } from "react";

function Discount() {
  const [code, setCode] = useState<string>("");

  const codeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  return (
    <div className="checkout__discount--code row col-md-12 ">
      <div className="card__header col-md-12">
        <h5>Mã giảm giá/Phiếu mua hàng</h5>
      </div>
      <div className="col-md-12 row discount__content pr-0">
        <div className="discount__code col-md-7 p-0">
          <input
            placeholder="Nhập mã của bạn"
            data-track-content="true"
            data-content-region-name="applyCoupon"
            data-content-name="applyInputCoupon"
            type="text"
            value={code}
            onChange={codeChange}
          />
        </div>
        <div className="col-md-5 p-0">
          <div className="col-md-12 p-0 ml-2">
            <button className="discount--button" disabled={code ? false: true}>
              Áp dụng ngay
            </button>
          </div>
        </div>
      </div>
      <div className="css-l39zko" />
    </div>
  );
}

export default Discount;
