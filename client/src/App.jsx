import { useState } from 'react'
import ShowAll from './ShowAll'
import AddBook from './AddBook'


function App() {
 

  return (
    <>
    <h1 className='text-amber-500 text-9xl text-center'>BookSource</h1>
    <AddBook/>
    <ShowAll/>
    
    </>
  ) 
}

export default App
