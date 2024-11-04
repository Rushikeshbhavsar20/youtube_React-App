import { createSlice } from "@reduxjs/toolkit";


export  const toggleSlice = createSlice({
    name:"hamburger",
    initialState:{
        toggle: false,
    },
    reducers:{
       Toggleit : (state)=>{
        
         state.toggle === false ? state.toggle = true : state.toggle = false

       }

    }
})

export const {Toggleit} = toggleSlice.actions
export default toggleSlice.reducer