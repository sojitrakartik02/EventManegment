import React from 'react'
import { Routes,BrowserRouter as Router, Route } from 'react-router-dom'
import EventDetail from './event detail/EventDetail'
import Contact from './contact/Contact'
import Profile from './profile/Profile'
import Home from './home/Home'
const User = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/'>
                <Route index element={<Home/>}/>
                {/* <Route path='contact' element={<Contact/>}/> */}
                <Route path='profile' element={<Profile/>}/>
                <Route path='eventdetail' element={<EventDetail/>}/>
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default User
