/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import "./CheckOut.css";
import NoneItem from "./NoneItem"

function CheckOutForm() {
    return (
        <div>
        <div className="css-1fh4ajs">
          <div className="css-1ouisd2">
            <div className="css-741t9y"><a color="#848788" href="/" className="css-1y81cwd"><span data-size={16} className="css-6rvkmf" /></a><span className="css-rhmj3t">&gt;</span></div>
            <div className="css-741t9y"><a color="#848788" className="css-vb1rlu">Giỏ hàng</a></div>
          </div>
         <NoneItem />
        </div>
        <div className="css-1fjg82v">
          <div data-type="error" className="css-xi8j9"><span data-size={50} color="#E24C4B" className="css-f6dj2x" /><span>Có lỗi xảy ra khi xuất báo giá. Vui lòng thử lại hoặc tải định dạng khác</span></div>
        </div>
      </div>
    )
}

export default CheckOutForm
