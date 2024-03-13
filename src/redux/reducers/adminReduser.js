import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({},{

    getAdminStatsRequest: state => {
        state.loading = true;
      },
      getAdminStatsSuccess: (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.viewsCount = action.payload.viewsCount;
        state.subscriptionCount = action.payload.subscriptionCount;
        state.usersCount = action.payload.usersCount;
        state.subscriptionPercentage = action.payload.subscriptionPercentage;
        state.viewsPercentage = action.payload.viewsPercentage;
        state.usersPercentage = action.payload.usersPercentage;
        state.subscriptionProfit = action.payload.subscriptionProfit;
        state.viewsProfit = action.payload.viewsProfit;
        state.usersProfit = action.payload.usersProfit;
      },
      getAdminStatsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },


    getAllUsersRequest:(state, action)=>{
        state.loading = true;
    },
    getAllUsersSuccess:(state, action)=>{ 
        state.loading = false;
        state.users = action.payload;
    },
    getAllUsersFail:(state, action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    updateUserRoleRequest:(state, action)=>{
        state.loading = true;
    },
    updateUserRoleSuccess:(state, action)=>{ 
        state.loading = false;
        state.message = action.payload;
    },
    updateUserRoleFail:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    deleteUserRequest:(state, action)=>{
        state.loading = true;
    },
    deleteUserSuccess:(state, action)=>{ 
        state.loading = false;
        state.message = action.payload;
    },
    deleteUserFail:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
    },




    createCourseRequest:(state)=>{
        state.loading = true;
    },
    createCourseSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    createCourseFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },


    
    deleteCourseRequest:(state,action)=>{
        state.loading = true;
    },
    deleteCourseSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    deleteCourseFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    addLectureRequest:(state,action)=>{
        state.loading = true;
    },
    addLectureSuccess:(state,action)=>{ 
        state.loading = false;
        state.message = action.payload;
    },
    addLectureFail:(state,action)=>{ 
        state.loading = false;
        state.error = action.payload;
    },

    deleteLectureRequest:(state,action)=>{
        state.loading = true;
    },
    deleteLectureSuccess:(state,action)=>{ 
        state.loading = false;
        state.message = action.payload;
    },
    deleteLectureFail:(state,action)=>{ 
        state.loading = false;
        state.error = action.payload;
    },




    clearMessage:(state,action)=>{
        state.message = null;
    },
    clearError:(state,action)=>{
        state.error = null;
    }
})