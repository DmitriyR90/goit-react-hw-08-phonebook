import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoadingAuth: false,
  error: null,
};

const handlePending = state => {
  state.isLoadingAuth = true;
};

const handleRejected = (state, action) => {
  state.isLoadingAuth = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // register
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingAuth = false;
    },
    [register.rejected]: handleRejected,

    // logIn
    [login.pending]: handlePending,
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoadingAuth = false;
    },
    [login.rejected]: handleRejected,

    // logOut
    [logout.pending]: handlePending,
    [logout.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoadingAuth = false;
    },
    [logout.rejected]: handleRejected,

    // refresh
    [refresh.pending](state) {
      state.isRefreshing = true;
      state.isLoadingAuth = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoadingAuth = false;
    },
    [refresh.rejected](state, action) {
      state.isLoadingAuth = false;
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
