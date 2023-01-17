import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { act_listCart } from "../actions";
import "../styles/index.css";
import { AiFillHeart } from "react-icons/ai";
import { formatter } from "../constants";
import Toastify from "toastify-js";
export const Products = () => {
  const products = useSelector((state) => state.products);
  let navigation = useNavigate();
  const dispatch = useDispatch();
  const handleBye = (index) => {
    Toastify({
      text: "Buy Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    dispatch(act_listCart(products[index]));

    // navigation({
    //   pathname: "/cart",
    //   search: "cart?hello,I am Pham Thanh Long",
    // });
  };

  const element = products.map((product, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card-sl">
          <div className="card-image">
            <img src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>

          <a className="card-action" href="#">
            <AiFillHeart className="icon_card" />
          </a>
          <div className="card-heading">{product.title}</div>
          <div className="card-text">
            Audi Q8 is a full-size luxury crossover SUV coupé made by Audi that
            was launched in 2018.
          </div>
          <div className="card-text">{formatter.format(product.price)}</div>
          <button onClick={() => handleBye(index)} className="card-button">
            Mua
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{element}</div>
    </div>
  );
};
