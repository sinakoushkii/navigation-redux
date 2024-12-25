import { configureStore } from '@reduxjs/toolkit'
import { navigationSlice } from '../features/navigation/navigationSlice'

export default configureStore({
  reducer: navigationSlice
})