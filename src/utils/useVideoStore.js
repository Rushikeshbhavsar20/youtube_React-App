import { configureStore } from "@reduxjs/toolkit"
import  videoReducer  from "../utils/videoSlice"

const videoStore = configureStore({
     reducer:{
        VideoCat: videoReducer,
     }
}) ;

export default videoStore