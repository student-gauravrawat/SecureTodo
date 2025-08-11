import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./todoSlice"

const store = configureStore({
    reducer:{
       auth: authReducer
    }
})

export default store 