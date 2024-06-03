import {createSlice} from '@reduxjs/toolkit'
import {configureStore} from '@reduxjs/toolkit'

const dutiesSlice = createSlice({
   name: 'duties',
   initialState: [],
   reducers: {
      addDuty(state, action) {
         state.push(action.payload)
      },
      deleteDuty(state, action){
         const updatedState = state.filter(el => el.taskID != action.payload )
         return updatedState
      },
      updateDuty(state, action){
         const index = state.findIndex(el => el.taskID == action.payload.taskID)
         state[index] = action.payload
         console.log(action.payload.taskID, index);
      }
   }
})

const storage = configureStore({reducer: {duties: dutiesSlice.reducer}})
const {addDuty, deleteDuty, updateDuty} = dutiesSlice.actions

export {addDuty, deleteDuty, updateDuty}
export default storage