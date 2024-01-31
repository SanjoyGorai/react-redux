import React from 'react'

const App = () => {

  function handleClick(event) {
    switch (event.target.id) {
      case 'increment': {
        console.log(event.target.id);
      }
        break;
      case 'decrement': {
        console.log(event.target.id);
      }
        break;
      default:
        console.log("No Conition is Satisfied");
        break;
    }
  }

  return (
    <div className=''>

      <h1 className='text-xl '>Redux React Vite App</h1>
      <h1 className='font-bold text-2xl text-blue-700 m-2'>Value : {''} </h1>
      <button className='bg-green-400 rounded p-2 font-semibold m-2' id='increment' onClick={handleClick}>Increment</button> <br />
      <button className='bg-red-600 rounded p-2 font-semibold m-2' id='decrement' onClick={handleClick}>Decrement</button>

    </div>
  )
}

export default App