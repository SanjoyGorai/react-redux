import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import store from '../app/store';

const Users = () => {

    const users = useSelector(state => state.user);

    return (
        <div className='bg-orange-300 p-3'>
            <h1 className='text-2xl font-bold text-yellow-400'>User Component : </h1>

            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3 className='font-bold text-xl m-2 text-pink-600'>Name : {user.name}  </h3>
                            <h3 className='font-bold text-xl m-2 text-pink-600'>Age :  {user.age} </h3>
                            <h3 className='font-bold text-xl m-2 text-pink-600'>Email  {user.email} : </h3>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Users