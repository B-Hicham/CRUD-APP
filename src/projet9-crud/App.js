
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from "./components/pages/Home"
import PageNotFound from './components/pages/PageNotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'
const App = () => {
  return (
    <Router>
        <div className='App container'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/user/add" element={<AddUser/>}/>
          <Route exact path="/user/edit/:id" element={<EditUser/>}/>
          <Route exact path="/User/:id" element={<User/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
        </div>

    </Router>
    
  )
}

export default App

// npm run json-server