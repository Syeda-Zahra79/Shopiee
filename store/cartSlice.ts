import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("items") as any) ? JSON.parse(localStorage.getItem("items") as any)
    : [],
  totalPrice: 0,
};

const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      // console.log(payload.id);
      // console.log(state.items);
      let findProductExists = false;
      for (let i in state.items) {
        if (payload.id == state.items[i].id) {
          findProductExists = true;
        }
      }

      const addQuantityOfProduct = () => {
        let itemNumber = 0;
        for (let i in state.items) {
          if (payload == state.items[i].id) {
            itemNumber++;
          }
        }
        //increaseQuantity(product.id, itemNumber)
      };

      findProductExists ? addQuantityOfProduct() : state.items.push(payload);

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    emptyBag: (state) => {
      console.log("i am items ", state.items);

      state.items = [];
      console.log("i am items ", state.items);
      localStorage.setItem("items", JSON.stringify(state.items));
      //setPrice(0);
    },

    sumPrice: (state) => {
      state.totalPrice = 0;
      state.items.map((product: any) => {
        let q = parseInt(product.quantity);
        state.totalPrice += q * parseFloat(product.price);
      });
    },

    deleteItem: (state, { payload }) => {
      let array = state.items.filter((product: any) => product.id !== payload);
      state.items = array;
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    increaseQuantity: (state, { payload }) => {
      state.items.map((product: any) => {
        if (product.id == parseInt(payload.id)) {
          product.quantity = product.quantity + payload.increment;
        }
      });
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    decreaseQuantity: (state, { payload }) => {
      state.items.map((product: any) => {
        if (product.id == parseInt(payload))
          if (product.quantity > 1) product.quantity--;
      });
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const {
  addItem,
  emptyBag,
  sumPrice,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
