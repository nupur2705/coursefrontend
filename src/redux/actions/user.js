import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const register = formdate => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/register`, formdate, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log(data);
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};

export const buySubscription = formdate => async dispatch => {
  try {
    dispatch({ type: 'buySubcriptionRequest' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });
    console.log(data.user._id);
    dispatch({ type: 'buySubcriptionSuccess', payload: data.user._id });
  } catch (error) {
    dispatch({
      type: 'buySubcriptionFail',
      payload: error.response.data.message,
    });
  }
};


export const cancelSubscription = () => async dispatch =>{
  try {
    dispatch({ type: 'cancelSubscriptionRequest'});

    const {data} = await axios.get(`${server}/subscribe/cancel`,{withCredentials:true}); 



    dispatch({type: 'cancelSubscriptionSuccess',payload:data.message});
  } catch (error) {
    dispatch({type: 'cancelSubscriptionFail',payload:error.response.data.message});
  }
}