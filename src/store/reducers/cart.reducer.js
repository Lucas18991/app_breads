import { Switch } from "react-native";
import { SELECTED_CATEGORY } from "../actions/category.action";
import { CART } from "../../data/cart";
const initialState = {
  items: CART,
  total: 25000,
};

const CartReducer = (state = initialState, action) => {
  return state;

  /* return state;*/
};

export default CartReducer;
