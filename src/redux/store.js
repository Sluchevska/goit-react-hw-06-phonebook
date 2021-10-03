import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";


const store = configureStore({
     reducer: {
          contacts: contactsReducer
     },
     devTools: process.env.Node_ENV==='development'
  
})
export default store