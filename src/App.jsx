import { useState } from 'react'
import { Route , Routes ,Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import AllStudents from './pages/AllStudents'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/allStudents' element={<AllStudents/>}/>
      </Routes>
    </>
  )
}

export default App
