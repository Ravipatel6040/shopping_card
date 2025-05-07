import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({
  name:'myshoppingcart',
  initialState:{
      value:[]
  },
  reducers:{
    addProductItem:(state,action)=>{
     var p_data = action.payload;
    // state.value = [...state.value,p_data];
    state.value = [...state.value,{product:p_data,qty:1}];
    },

    incrementQty : (state,action)=>{
      var p_id = action.payload;
      state.value = state.value.map(obj=>obj.product.id == p_id ?{...obj,qty:obj.qty+1} : obj);
    },

    decrementQty : (state,action)=>{
      var p_id = action.payload;
      state.value = state.value.map(obj=>obj.product.id == p_id ?{...obj,qty:obj.qty-1} : obj);
    },

    removeItem : (state,action)=>{
      var p_id = action.payload;
      state.value = state.value.filter(obj=>obj.product.id != p_id);
    },
  }
});
export const {addProductItem,incrementQty,decrementQty,removeItem} = slice.actions;
export default slice.reducer;