import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data : []
}

const TodoSlice = createSlice({
    name : "todo" ,
    initialState ,
    reducers : {
        addData : (state,action)=>{
            state.data = [...state.data,action.payload]
        }
    }
})

export const {addData} = TodoSlice.actions
export default TodoSlice.reducer