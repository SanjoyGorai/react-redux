
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/users/usersSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});

export default store;

// ()
