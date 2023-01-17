export const act_listCart = (value) => {
  return {
    type: "LIST_CART",
    payload: value,
  };
};

export const act_deleteCart = (value) => {
  return {
    type: "Delete",
    payload: value,
  };
};

export const act_payCart = (value) => {
  return {
    type: "Pay",
    payload: value,
  };
};

export const act_addQuantity = (value) => {
  return {
    type: "AddQuantity",
    payload: value,
  };
};

export const act_minusQuantity = (value) => {
  return {
    type: "MinusQuantity",
    payload: value,
  };
};
