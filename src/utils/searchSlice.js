import { createSlice } from "@reduxjs/toolkit";


const searchStore = createSlice({
    name:"Search",
    initialState :{
        suggestion:{}
    },
    reducers:{
        addSuggestion : function(state,action){
            const {key,value} = action.payload
            const newobj = {}
            newobj[key] = value
            state.suggestion = {...state.suggestion , ...newobj}
          }
}} )

export const{addSuggestion} = searchStore.actions
export default searchStore.reducer