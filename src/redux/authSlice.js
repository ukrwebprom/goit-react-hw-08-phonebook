import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from './operations';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogged: false,
    error:false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.error = false;
        },
        [register.rejected](state) {
            state.isLogged = false;
            state.error = true;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogged = true;
            state.error = false;
        },
        [login.rejected](state, action) {
            state.isLogged = false;
            state.error = true;
        },
        [logout.fulfilled](state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLogged = false;
        },
        [getCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLogged = true;
            state.error = false;
        }
    }
})

export const authReducer = authSlice.reducer;