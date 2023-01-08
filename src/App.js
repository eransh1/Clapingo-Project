import React from 'react'
import Home from './pages/Home/Home'
import {Route,Routes} from 'react-router-dom'
import Dashbord from './pages/Dashbord/Dashbord'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'



const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/dashboard' element={<Dashbord/>}></Route>
    </Routes>
    </>
  )
}

export default App