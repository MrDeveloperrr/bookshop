import { useState } from 'react'
import ShowAll from './ShowAll'
import AddBook from './AddBook'
import { Route, Routes } from "react-router-dom"
import NavBar from './NavBar'
import NotFound from './NotFound'
import UpdateBook from './UpdateBook'


function App() {


  return (
    <>
      <NavBar />
      {/* <h1 className='text-black-500 text-8xl text-center'>Books</h1>   */}
      {/* <p className='text-center text'>All Your Books Here</p>  */}
      <Routes>
        <Route path='/' element={<ShowAll />} />
        <Route path='/book'>
          <Route path='add' element={<AddBook />} />
          <Route path='update/:id' element={<UpdateBook />} />
        </Route>

        <Route path='*' element={<NotFound />} />


      </Routes>

    </>
  )
}

export default App
