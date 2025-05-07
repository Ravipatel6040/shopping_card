import { configureStore } from "@reduxjs/toolkit";
import sliceData from './Slice.jsx'
const store = configureStore({
    reducer:{
        'myCartData':sliceData
    }
});
export default store;