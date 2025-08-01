import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'

export const store = configureStore({
  reducer: {
    counter: weatherReducer
  }
})