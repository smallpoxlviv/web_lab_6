import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import accessReducer from "./accessSlice";

export default configureStore({
    reducer: {
        cartReducer: cartReducer,
        checkoutReducer: checkoutReducer,
        accessReducer: accessReducer
    }
})