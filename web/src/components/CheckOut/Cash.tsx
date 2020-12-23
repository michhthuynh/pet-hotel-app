import React from "react";

interface props {
  cashTemp: number;
  cashTrans: number;
  cashDiscount: number;
}
function Cash({ cashTemp, cashTrans, cashDiscount }: props) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(price);
  return (
    <div className="checkout__cash mt-2">
      <div className="card__header css-0 p-0">
        <h5>Thanh toán</h5>
      </div>
      <div className="p-0">
        <div>
          <table className="cash--table">
            <tbody>
              <tr>
                <td color="#848788">Tạm tính</td>
                <td>
                  <span className="css-htm2b9">{formatPrice(cashTemp)}</span>
                </td>
              </tr>
              <tr>
                <td color="#848788">Phí vận chuyển</td>
                <td>
                  <span className="">{formatPrice(cashTrans)}</span>
                </td>
              </tr>
              <tr>
                <td color="#848788">Khuyến mãi</td>
                <td className="col-md-8">
                  <span className="css-htm2b9 ">
                    {" "}
                    {formatPrice(cashDiscount)}
                  </span>
                </td>
              </tr>
              <tr>
                <td color="#848788">Thành tiền</td>
                <td>
                  <span className="cash--total">{formatPrice(cashTemp-cashTrans-cashDiscount)}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cash--vat">(Đã bao gồm VAT)</div>
        </div>
      </div>
      <div className="cash--footer">
        <button
          data-track-content="true"
          data-content-region-name="bottomShoppingCart"
          data-content-name="continuePayment"
          className="footer--button"
        >
          TIẾP TỤC THANH TOÁN
        </button>
      </div>
    </div>
  );
}

export default Cash;
