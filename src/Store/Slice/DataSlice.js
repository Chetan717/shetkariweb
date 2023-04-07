import  {createSlice}  from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name:"filter",
    initialState:[],
    reducers:{
        blogData(state,action){
    state.push(action.payload)
        },
      
    }
})

export default DataSlice.reducer;
export const {blogData} = DataSlice.actions 
