import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: [
        { id: 1, name: 'Sanjoy Gorai', age: 23, email: ` sanjoygorai@gmail.com` },
        { id: 2, name: 'John Doe', age: 24, email: `johndoe@gmail.com` },
    ],
    reducers: {
        addUser: state => {
            state.value = state.value
        }
    }
});


export default usersSlice.reducer;

console.log();