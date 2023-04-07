import  {createSlice}  from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name:"filter",
    initialState:"",
    reducers:{
        Filterid(state,action){
            return state = action.payload
        },
      
    }
})

export default FilterSlice.reducer;
export const {Filterid} = FilterSlice.actions 
