import { server } from '../store.js';
import axios from 'axios';

export const contactUs = (name, email, message) => async dispatch => {
  try {
    dispatch({ type: 'contactRequest' });
    const { data } = await axios.post(
      `${server}/contact`,
      { name, email, message },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    dispatch({ type: 'contactSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'contactFail', payload: error.response.data.message });
  }
};

export const requestCourse = (name, email, course) => async dispatch => {
  try {
    dispatch({ type: 'courseRequestRequest' });
    const { data } = await axios.post(
      `${server}/courserequest`,
      { name, email, course },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    dispatch({ type: 'courseRequestSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'courseRequestFail',
      payload: error.response.data.message,
    });
  }
};
