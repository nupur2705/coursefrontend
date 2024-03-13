import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, subscriptionReducer, userReducer } from './reducers/userReducser.js';
import {courseReducer} from './reducers/courseReduser.js'
import { adminReducer } from './reducers/adminReduser.js';
import { otherReducer } from './reducers/otherReducer.js';


const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription:subscriptionReducer,
    admin: adminReducer,
    other: otherReducer
  },
});

export default store;



export const server = `http://localhost:4000/api/v1`;