import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./Slice/FilterSlice";
import DataSlice from "./Slice/DataSlice";
const Store = configureStore({
    reducer:{
        Filter : FilterSlice,
        Data : DataSlice
        }
})

export default Store;