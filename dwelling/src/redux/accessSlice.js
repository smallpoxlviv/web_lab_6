import {createSlice} from "@reduxjs/toolkit";

export const accessSlice = createSlice({
    name: "accessReducer",
    initialState: {
        access: false
    },
    reducers: {
        setAccess: (store, action) => {
            store.access = action.payload;
        }
    }
});

export default accessSlice.reducer;
export const {setAccess} = accessSlice.actions;

export const getAccess = (store) => store.accessReducer.access;
