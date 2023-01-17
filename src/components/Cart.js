import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/index.css";
import {
  act_deleteCart,
  act_payCart,
  act_addQuantity,
  act_minusQuantity,
} from "../actions";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import Toastify from "toastify-js";
import { formatter } from "../constants";

export const Cart = () => {
  let listCart = useSelector((state) => state.cart.cartAr);
  const dispatch = useDispatch();
  let totalPrice = 0;

  const element = listCart.map((cart, index) => {
    totalPrice += cart.price;
    return (
      <tbody key={index}>
        <tr>
          <td className="table_data">{index + 1}</td>
          <td className="table_data">{cart.title}</td>
          <td className="table_data">
            <GrFormAdd
              className="add_quantity"
              onClick={() => handleAddQuantity(cart.id)}
            />
            {cart.quantity}{" "}
            <AiOutlineMinus
              className="minus_quantity"
              onClick={() => handleMinusQuantity(cart.id)}
            />
          </td>
          <td className="table_data">{formatter.format(cart.price)}</td>
          <td className="table_data">
            <AiFillDelete
              className="table_delete"
              onClick={() => handleDelete(cart.id)}
            />
          </td>
        </tr>
      </tbody>
    );
  });

  const handleAddQuantity = (index) => {
    Toastify({
      text: "Add product Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    dispatch(act_addQuantity(index));
  };

  const handleMinusQuantity = (index) => {
    Toastify({
      text: "Delete product Success !!",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    dispatch(act_minusQuantity(index));
  };
  const handleDelete = (index) => {
    Toastify({
      text: "Delete Success !!",
      gravity: "top",
      position: "center",
      style: {
        background: "red",
      },
    }).showToast();
    dispatch(act_deleteCart(index));
  };

  const handlePay = () => {
    if (listCart.length > 0) {
      Toastify({
        text: "Pay Success !!",
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      dispatch(act_payCart([]));
    } else {
      Toastify({
        text: "Not products in Cart !!",
        gravity: "top",
        position: "center",
        style: {
          background: "red",
        },
      }).showToast();
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table_header">ID</th>
            <th className="table_header">Name Product</th>
            <th className="table_header">Quantity</th>
            <th className="table_header">Price</th>
            <th className="table_header">Action</th>
          </tr>
        </thead>
        {element}
      </table>
      <div>
        Total Price: {formatter.format(totalPrice)}{" "}
        <button className="btn_buy" onClick={handlePay}>
          Mua
        </button>
      </div>
    </div>
  );
};
