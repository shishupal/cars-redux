import { createSlice } from "@reduxjs/toolkit";
import { addCars } from "./CarSlice";


const FormSlice = createSlice({
    name:'form',
    initialState:{
        name:'',
        cost:0
    },
    reducers:{
            changeName(state,action){
                state.name= action.payload;
            },

            changeValue(state,action){
                state.cost= action.payload;
            }


    },
    extraReducers(builder){
        builder.addCase(addCars,(state,action)=>{
            state.name= '';
            state.cost= '';

        })
    }

});

export const {changeName,changeValue} = FormSlice.actions;
export const FormReducer= FormSlice.reducer;