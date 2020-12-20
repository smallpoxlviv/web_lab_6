import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";

export default configureStore({
    reducer: {
        cartReducer: cartReducer,
        checkoutReducer: checkoutReducer
    }
})