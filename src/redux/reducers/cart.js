const initialState = {
  cartAr: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_CART":
      const productInCart = state.cartAr.find(
        (index) => index.id === action.payload.id
      );
      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } else {
        let newCart = state.cartAr;
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (newCart[objIndex].quantity === undefined) {
          newCart[objIndex].quantity = 2;
        } else {
          newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
          newCart[objIndex].price =
            newCart[objIndex].quantity * newCart[objIndex].price;
        }
        return { cartAr: [...newCart] };
      }

    case "Delete":
      let newCart = state.cartAr;
      const objIndex = newCart.findIndex((obj) => obj.id === action.payload);
      newCart.splice(objIndex, 1);
      return { cartAr: [...newCart] };
    case "Pay":
      return { cartAr: action.payload };

    case "AddQuantity":
      let array = state.cartAr;
      const addQuantityIndex = array.findIndex(
        (obj) => obj.id === action.payload
      );
      array[addQuantityIndex].quantity = array[addQuantityIndex].quantity + 1;
      array[addQuantityIndex].price =
        array[addQuantityIndex].quantity * array[addQuantityIndex].price;
      return { cartAr: [...array] };

    case "MinusQuantity":
      let array2 = state.cartAr;
      const addQuantityIndex2 = array2.findIndex(
        (obj) => obj.id === action.payload
      );
      if (array2[addQuantityIndex2].quantity !== 1) {
        array2[addQuantityIndex2].quantity =
          array2[addQuantityIndex2].quantity - 1;
        array2[addQuantityIndex2].price =
          array2[addQuantityIndex2].quantity * array2[addQuantityIndex2].price;
      } else {
        const objIndex = array2.findIndex((obj) => obj.id === action.payload);
        array2.splice(objIndex, 1);
        alert("Bạn chắc chắn muốn xóa !!!");
        return { cartAr: [...array2] };
      }

      return { cartAr: [...array2] };

    default:
      return state;
  }
};

export default cart;
