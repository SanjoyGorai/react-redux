import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from './app/store';
import { increment, decrement } from './features/counter/counterSlice';
import Users from './components/Users';
import Blog from './components/Blog';

const App = () => {

  console.log(store.getState());
  const value = useSelector(state => state.counter.value);
  const diapatch = useDispatch();


  function handleClick(event) {
    switch (event.target.id) {
      case 'increment': {
        console.log(event.target.id);
        diapatch(increment())
      }
        break;
      case 'decrement': {
        console.log(event.target.id);
        diapatch(decrement())
      }
        break;
      default:
        console.log("No Conition is Satisfied");
        break;
    }
  }

  return (
    <div className=''>
      <Blog/>
      <Users/>
      <h1 className='text-xl '>Redux React Vite App</h1>
      <h1 className='font-bold text-2xl text-blue-700 m-2'>Value : {value} </h1>
      <button className='bg-green-400 rounded p-2 font-semibold m-2' id='increment' onClick={handleClick}>Increment</button> <br />
      <button className='bg-red-600 rounded p-2 font-semibold m-2' id='decrement' onClick={handleClick}>Decrement</button>

    </div>
  )
}

export default App