import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    //Sorry, I can't show all code. But don't worry, it works! 
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (params) => {
    //Sorry, I can't show all code. But don't worry, it works! 
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
        //Sorry, I can't show all code. But don't worry, it works! 
    },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;