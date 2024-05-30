import React, { useState, useEffect } from 'react'
import '../style/style.css'
import '../style/responsive.css'
import '../style/animate.css'
import { Link } from 'react-router-dom'


const Header = ({logo,linkColor}) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <>
            <header>
                <div class={`header-area header-style-one header-light ${isSticky ? 'sticky' : ''}`}>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-xl-flex align-items-center">
                                <div class="logo d-flex align-items-center justify-content-between">
                                    <Link to="/" className='logo-dark' style={{display:`${isSticky ? 'block': 'none'}`}}><img src='https://demo.egenslab.com/html/eventlab/assets/images/logo.png' alt="logo" /></Link>
                                    <Link to="/" className='logo-light' style={{display:`${isSticky ? 'none': 'block'}`}}><img src={logo} alt="logo" /></Link>
                                    <div class="mobile-menu d-flex ">
                                        <div onClick={toggleNav} class="hamburger d-block d-xl-none">
                                            <span class="h-top"></span>
                                            <span class="h-middle"></span>
                                            <span class="h-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                                <nav class={`main-nav ${isNavVisible ? 'slidenav' : ''}`}>
                                    <div class="inner-logo d-xl-none">
                                        <Link to="/"><img src="https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png" alt="logo" /></Link>
                                    </div>
                                    <ul>
                                        <li class="has-child-menu">
                                            <Link to="/" style={{color:linkColor}}>Home</Link>
                                        </li>
                                        {/* <li><Link to="/contact" style={{color:linkColor}}>Contact</Link></li> */}
                                        <li><Link to="/profile" style={{color:linkColor}}>Profile</Link></li>
                                    </ul>
                                    <div class="inner-btn d-xl-none">
                                        <Link to="/eventdetail" class="primary-btn-fill">Get Ticket</Link>
                                    </div>
                                </nav>
                            </div>
                            <div class="col-xl-2 col-2 d-none d-xl-block p-0">
                                <div class="nav-right h-100 d-flex align-items-center justify-content-end">
                                    <ul>
                                        <li class="nav-btn">
                                            <Link class="primary-btn-fill" to="/">Get Ticket</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
