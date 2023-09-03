import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Contact from './pages/AskQuestion/AskQuestion'
import About from './pages/About/About'

// import UserProfile from './pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/Auth' Component={Auth}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>
        
        {/* <Route exact path='/Users/:id' Component={UserProfile}/> */}
      </Routes>
    </>
  )
}

export default AllRoutes
