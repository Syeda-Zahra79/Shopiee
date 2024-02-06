import {  createSlice } from "@reduxjs/toolkit";
import {data as products} from '../assets/data'


const initialState = {
    items : products,
}

const cartSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
})


export default cartSlice.reducer;