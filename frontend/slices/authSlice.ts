"use client"
import {createSlice} from '@reduxjs/toolkit' 



const initialState= {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,

}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setToken(state,value){
            state.token = value.payload;
            localStorage.setItem('token',value.payload);
        },
        setUser(state,value){
            state.user = value.payload;
            localStorage.setItem('user',value.payload);
        },
    
    }
})
export default authSlice.reducer;
export const {setToken,setUser} = authSlice.actions;
