import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({},{
    contactRequest:(state, action) =>{
        state.loading = true;
    },
    contactSuccess:(state, action) =>{
        state.loading = false;
        state.message = action.payload;
    },
    contactFail:(state, action) =>{
        state.loading = false;
        state.error = action.payload;
    },
    courseRequestRequest:(state, action) =>{
        state.loading = true;
    },
    courseRequestSuccess:(state, action) =>{
        state.loading = false;
        state.message = action.payload;
    },
    courseRequestFail:(state, action) =>{
        state.loading = false;
        state.error = action.payload;
    },






    clearMessage:(state, action) =>{
        state.message =null;
    },
    clearError:(state, action) =>{
        state.error = null;
    }



})