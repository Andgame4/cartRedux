import { combineReducers } from "redux";
import products from "./reducers/products";
import cart from "./reducers/cart";
export const reducer = combineReducers({ products, cart });
