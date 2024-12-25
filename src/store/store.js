import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from '../features/navigation/navigationSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer, // Provide a key for the slice in the reducer map
  },
})

