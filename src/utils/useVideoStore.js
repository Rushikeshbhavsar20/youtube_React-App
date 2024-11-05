import { configureStore } from "@reduxjs/toolkit"
import  videoReducer  from "../utils/videoSlice"
import  Toggle  from "../utils/toggleSlice"
import SearchSuggestion from "../utils/searchSlice"
const videoStore = configureStore({
     reducer:{
        VideoCat: videoReducer,
        ToggleFunction: Toggle,
        Search: SearchSuggestion,
     }
}) ;

export default videoStore