import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const delToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpThunk = createAsyncThunk(
  'users/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setToken(data.token);
      Notiflix.Notify.success(`You are registred as ${data.user.name}`);
      return data;
    } catch (e) {
      Notiflix.Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setToken(data.token);
      Notiflix.Notify.success('Welcome to phonebook!');
      return data;
    } catch (e) {
      Notiflix.Notify.failure('Wrong password or email!');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'users/logOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');
      delToken(data.token);
      return data;
    } catch (e) {
      Notiflix.Notify.failure(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
    try {
      setToken(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
