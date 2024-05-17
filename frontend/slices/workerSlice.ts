"use client"
import {createSlice} from '@reduxjs/toolkit' 



const initialState= {
    balance : 0
}

const workerSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setBalance(state,value){
            state.balance = value.payload;
        }
    
    }
})
export default workerSlice.reducer;
export const {setBalance} = workerSlice.actions;
