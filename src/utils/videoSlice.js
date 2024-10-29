import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
      name:'video',
      initialState:{
           videoCat:[]
      },
      reducers:{
        fetchData:(state,action)=>{
            state.videoCat.push(action.payload)
        }
      }
})


export const {fetchData} = videoSlice.actions
export default videoSlice.reducer 