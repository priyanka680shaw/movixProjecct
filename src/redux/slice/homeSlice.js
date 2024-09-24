import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url  :{},
    geners  :{}
}

export const  homeSlice = createSlice({
    name : "Home",
    initialState,
    reducers : {
        getConfiguration : (state , action)=>{
            state.url = action.payload
        },
        getGener  :(state , action)=>{
            state.geners = action.payload
        }
    } 
})
//exporting actions
export const  {getConfiguration , getGener} = homeSlice.actions
export const homeReducer = homeSlice.reducer