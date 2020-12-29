import React from "react";
import "./Header.scss";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "../Navbar/Navbar";

function header() {
  return (
    <header id="header">
      {/*header*/}
      <div className="header_top">
        {/*header_top*/}
        <div className="container--header">
          <div className="row">
            <div className="col-sm-6 ">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="login.html">
                      <i className="fa fa-phone" /> +84 332 083 856
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-envelope" /> info@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="login.html">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header_top*/}
      <div className="header-middle">
        {/*header-middle*/}
        <div className="container container--middle">
          <div className="row">
            <div className="col-md-6 clearfix">
              <div className="logo pull-left">
                <a href="index.html">
                  <img src="./logo192.png" alt="" />
                </a>
              </div>
              <div className="btn-group search-area">
                <div className="input-group mb-2">
                  <input
                    type="search"
                    placeholder="What're you searching for?"
                    aria-describedby="button-addon5"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon5"
                      type="submit"
                      className="btn btn-primary"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 clearfix">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="login.html">
                      <i className="fa fa-user" /> Account
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-star" /> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="fa fa-crosshairs" /> Checkout
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="fa fa-shopping-cart" /> Cart
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="fa fa-lock" /> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-middle*/}
      <div className="header-bottom">
        {/*header-bottom*/}
        <div className="container container--bottom">
            <Navbar />
        </div>
      </div>
    </header>
  );
}

export default header;
