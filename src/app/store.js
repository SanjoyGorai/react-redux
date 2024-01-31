
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/users/usersSlice'
import newsReducer from '../features/news/newsSlice'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        news : newsReducer
    }
});

export default store;

// ()
