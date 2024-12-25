import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
      count: 0,
      uri:'',
      url:'',
    },
    reducers: {
        increament: (state) => {
            state.count += 1
        },
        navigateTO:(state,action)=>{
            window.location.pathname=""
            window.location.href=action.payload.uri
        }
    }
})

  // Action creators are generated for each case reducer function
export const { increament ,navigateTO} = navigationSlice.actions

export default navigationSlice.reducer
  