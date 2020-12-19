import {createSlice} from "@reduxjs/toolkit";
import {getDwellingById} from "../api/api";

export const quantitySlice = createSlice({
    name: "quantityReducer",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        incrementQuantity: (store, action) => {
            store.cartItems = store.cartItems.map((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
                return item;
            });
            store.totalPrice = countTotalPrice(store);
        },
        decrementQuantity: (store, action) => {
            store.cartItems = store.cartItems.map((item) => {
                if (item.id === action.payload) {
                    item.quantity -= 1;
                }
                return item;
            });
            store.totalPrice = countTotalPrice(store);
        },
        deleteItemFromCart: (store, action) => {
            store.cartItems = store.cartItems.filter(item => {
                return item.id !== action.payload;
            });
            store.totalPrice = countTotalPrice(store);
        },
        addToCart: (store, action) => {
            let addToArray = true;
            store.cartItems.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    addToArray = false;
                }
            })
            if (addToArray) {store.cartItems.push({...action.payload, quantity: 1});}
            store.totalPrice = countTotalPrice(store);
        }
    }
});

function countTotalPrice(store) {
    let totalPrice = 0;
    store.cartItems.forEach((item) => {
        totalPrice += item.quantity * item.price_in_USD
    })
    return totalPrice;
}

export default quantitySlice.reducer

const {incrementQuantity, decrementQuantity, deleteItemFromCart, addToCart} = quantitySlice.actions;
export {incrementQuantity, decrementQuantity, deleteItemFromCart}

export const getTotalPrice = (store) => store.quantityReducer.totalPrice;
export const getCartItems = (store) => store.quantityReducer.cartItems;

export const addToCartAsync = (id) => (dispatch) => {
    getDwellingById(id).then(item => {
        dispatch(addToCart(item))
        alert(item.title + " was added to cart.");
    })
};