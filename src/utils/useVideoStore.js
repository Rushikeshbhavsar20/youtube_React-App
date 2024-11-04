import { configureStore } from "@reduxjs/toolkit"
import  videoReducer  from "../utils/videoSlice"
import  Toggle  from "../utils/toggleSlice"
const videoStore = configureStore({
     reducer:{
        VideoCat: videoReducer,
        ToggleFunction: Toggle,
     }
}) ;

export default videoStore