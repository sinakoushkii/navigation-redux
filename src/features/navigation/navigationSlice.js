import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
      count: 0
    },
    reducers: {
        increament: (state) => {
            state.count += 1
        },
    }
})

  // Action creators are generated for each case reducer function
export const { increament } = navigationSlice.actions

export default navigationSlice.reducer
  