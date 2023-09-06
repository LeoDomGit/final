import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getBrand = createAsyncThunk('brands/getBrands' , async ()=>{
    return fetch("https://students.trungthanhweb.com/api/home?apitoken="+localStorage.getItem('token'))
    .then((res)=>res.json());
})
export const brandSlice = createSlice({
    name: 'brands',
    initialState:{
        brands:[],
        loading:false
    },
    extraReducers:{
        [getBrand.pending]: (state,action)=>{
            state.loading=true;
        },
        [getBrand.fulfilled]:(state,action)=>{
            state.loading=false;
            state.brands= action.payload.brands
        },
        [getBrand.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export default brandSlice.reducer