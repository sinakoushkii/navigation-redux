import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
      value: 0
    },
    reducers: {
        navigate:state=>{

        }
    }
  })

  // Action creators are generated for each case reducer function
export const { navigate } = counterSlice.actions

export default counterSlice.reducer
  