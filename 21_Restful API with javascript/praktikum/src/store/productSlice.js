import { createSlice } from "@reduxjs/toolkit";
import hero from '../assets/hero-img.png'

const initialState = [
  {
    id: 1,
    productName: "Hero Image",
    productCategory: "Jacket",
    productFreshness: "Brand New",
    productDescription: "hero image",
    productPrice: 104,
    productImage: `${hero}`,
  },
];

const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const {
        id,
        productName,
        productCategory,
        productFreshness,
        productDescription,
        productPrice,
        productImage,
      } = payload;
      const newProduct = {
        id,
        productName,
        productCategory,
        productFreshness,
        productDescription,
        productPrice,
        productImage,
      };
      state.push(newProduct);
    },

    editProduct: (state, { payload }) => {
      const { id, updatedProduct } = payload;
      const index = state.findIndex((product) => product.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedProduct };
      }
    },

    deleteProduct: (state, { payload }) => {
      const { id } = payload;
      const filteredProduct = state.filter((product) => product.id !== id);
      return filteredProduct;
    },
  },
});

export const selectProducts = (state) => state.products;

export const { addProduct, editProduct, deleteProduct } = productSlices.actions;
export default productSlices.reducer;