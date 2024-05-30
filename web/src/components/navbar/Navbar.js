import "./navbar.css"
import { Home, CalendarDays, BadgeAlert, BellDot, CalendarCheck2, User } from 'lucide-react'
import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import { showAlert } from "../alert/Alert";

const Navbar = ({ showMenu, handleArrowClick, handleArrowEClick, arrow, arrowE }) => {
   let navigate = useNavigate()
   const handleLogout = ()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('categoryData')
      localStorage.removeItem('sponserData')
      localStorage.removeItem('categoryid')
      localStorage.removeItem('sponserid')
      localStorage.removeItem('eventdetail')
      showAlert('success','Logout')
      navigate('/login')
   }
   return (
      <>

         <div className={`shadow-lg bg-body rounded ${showMenu ? 'expovent__sidebar collapsed' : 'expovent__sidebar'}`} style={{  margin: '0', padding: '0' }}>
            <div className="logo-details shadow-sm bg-body">
               <span>
                  <Link to="/" style={{ display: `${showMenu ? 'block' : 'none'}` }}>
                     EM
                  </Link>
               </span>
               <span>
                  <Link to="/" style={{ display: `${showMenu ? 'none' : 'block'}` }}>
                     Event Management
                  </Link>
               </span>
            </div>
            <div className="sidebar__inner simple-bar">
               <div className="dlabnav">
                  <div>
                     <ul className="metismenu" id="menu">
                        <li>
                           <Link to="/" aria-expanded="false">
                              <i><Home size={25}/></i>
                              <span className="nav-text">Dashboard</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/calendar" aria-expanded="false">
                              <i><CalendarDays size={25} /></i>
                              <span className="nav-text">Calender View</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/kyc" aria-expanded="false">
                              <i><BadgeAlert size={25} /></i>
                              <span className="nav-text">KYC Verification</span>
                           </Link>
                        </li>
                        <li>
                           <Link to="/" aria-expanded="false">
                              <i><BellDot size={25} /></i>
                              <span className="nav-text">Notification</span>
                           </Link>
                        </li>
                        <li className={`${arrowE ? 'mm-active' : ''}`}>
                           <Link className="has-arrow" onClick={handleArrowEClick} aria-expanded={!!arrowE}>
                              <i><CalendarCheck2 size={25} /></i>

                              <span className="nav-text">Event</span>
                           </Link>
                           <ul role="listbox" aria-expanded="false" className={`${arrowE ? 'mm-collapse mm-show' : 'mm-collapse'}`} >
                              <li><Link to="/event/category">Category</Link></li>
                              <li><Link to="/event/sponser">Sponser</Link></li>
                              <li><Link to="/event"> Event</Link></li>
                           </ul>
                        </li>
                        <li className={`${arrow ? 'mm-active' : ''}`}>
                           <Link className="has-arrow" onClick={handleArrowClick} aria-expanded={!!arrowE}>
                              <i><User size={25} /></i>

                              <span className="nav-text">Profile</span>
                           </Link>
                           <ul role="listbox" aria-expanded="false" className={`${arrow ? 'mm-collapse mm-show' : 'mm-collapse'}`} >
                              <li><Link to="/profile">Profile</Link></li>
                              <li><Link to="/setting">Setting</Link></li>
                              <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className={`${showMenu ? 'app__offcanvas-overlay overlay-open' : 'app__offcanvas-overlay'}`}></div>
      </>
   )
}

export default Navbar

