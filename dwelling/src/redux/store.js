import {configureStore} from "@reduxjs/toolkit";
import quantityReducer from "./quantitySlice";

export default configureStore({
    reducer: {
        quantityReducer: quantityReducer
    }
})