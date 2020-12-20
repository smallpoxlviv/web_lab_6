import {createSlice} from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
    name: "checkoutReducer",
    initialState: {
        checkout: false,
        success: false
    },
    reducers: {
        setCheckout: (store, action) => {
            store.checkout = action.payload;
        },
        setSuccess: (store, action) => {
            store.success = action.payload;
        }
    }
});

export default checkoutSlice.reducer
export const {setCheckout, setSuccess} = checkoutSlice.actions;

export const getCheckout = (store) => store.checkoutReducer.checkout;
export const getSuccess = (store) => store.checkoutReducer.success;
