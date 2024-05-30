import React from 'react'
import Header from '../header/Header'
import '../style/style.css'
import '../style/responsive.css'
import '../style/animate.css'
import Footer from '../footer/Footer'
import Card from '../card/Card'

const Home = () => {
    return (
        <>
            <Header logo={'https://demo.egenslab.com/html/eventlab/assets/images/logo.png'} linkColor={'black'}/>
            <div class="main-slider-wrapper gray-300">
                <div class="hero-area">
                    <div class="hero-shape">
                        <img src="https://demo.egenslab.com/html/eventlab/assets/images/shapes/hero-shape.png" alt="img" />
                    </div>
                    <div class="container">
                        <div class="swiper-container hero-slider overflow-hidden">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="slide-content">
                                                <h5><i class="bi bi-calendar2-week"></i> January 21, 2021</h5>
                                                <h2>EVENTS, MEETUPS &
                                                    <span>CONFERENCES</span>
                                                </h2>
                                                <ul class="featured-event">
                                                    <li><i class="bi bi-diagram-3"></i> <span>500</span> Seat</li>
                                                    <li><i class="bi bi-geo"></i> 1356 Broadway, New York</li>
                                                </ul>
                                                <div class="slider-btns">
                                                    <a href="/eventdetail" class="primary-btn-fill">Book Now</a>
                                                    <a href="/eventdetail" class="primary-btn-outline">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 text-center">
                                            <div class="slide-figure  position-relative d-lg-flex justify-content-center">
                                                <img src="https://demo.egenslab.com/html/eventlab/assets/images/hero/hero-figure1.png" alt="img" class="img-fluid" />
                                                <div class="animated-shape">
                                                    <img src="https://demo.egenslab.com/html/eventlab/assets/images/shapes/hero-animi.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-searchbar-area">
                    <div class="container">
                        <form class="searchbar-wrapper" action="#">
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="searchbar-input-group">
                                                <input type="text" placeholder="Event Location....." id="search-location" />
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="searchbar-input-group">
                                                <input type="date" id="datepicker" placeholder="Date" />
                                                {/* <i class="bi bi-calendar2-week"></i> */}
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="searchbar-input-group">
                                                <div class="custom-select filter-options">
                                                    <select style={{ borderRadius: '100px', border: '1px solid #ce1446', display: 'block', height: '50px' }}>
                                                        <option selected disabled hidden>Select category</option>
                                                        <option value="1"> Category 1</option>
                                                        <option value="1">Category 2</option>
                                                        <option value="2">Category 3</option>
                                                        <option value="3">Category 4</option>
                                                        <option value="3">Category 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="search-submit">
                                        <input type="submit" value="Search Now" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="event-area gray-300">
                <div class="container position-relative pt-110">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="background-title text-style-one">
                                <h2>EVENT</h2>
                            </div>
                            <div class="section-head">
                                <h5>Event</h5>
                                <h3>Popular Event</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="event-category-buttons d-flex justify-content-center">
                                <ul class="nav nav-pills mb-3" id="events-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-tab1" data-bs-toggle="pill" data-bs-target="#pills-event1" type="button" role="tab" aria-controls="pills-event1" aria-selected="true">Business <span>10</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-tab2" data-bs-toggle="pill"
                                            data-bs-target="#pills-event2" type="button" role="tab" aria-controls="pills-event2"
                                            aria-selected="false">Fire Wall <span>10</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-tab3" data-bs-toggle="pill"
                                            data-bs-target="#pills-event3" type="button" role="tab" aria-controls="pills-event3"
                                            aria-selected="false">Sport <span>10</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-tab4" data-bs-toggle="pill"
                                            data-bs-target="#pills-event4" type="button" role="tab" aria-controls="pills-event4"
                                            aria-selected="false">Web Development <span>10</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-tab5" data-bs-toggle="pill"
                                            data-bs-target="#pills-event5" type="button" role="tab" aria-controls="pills-event5"
                                            aria-selected="false">Marketing <span>10</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-tab6" data-bs-toggle="pill"
                                            data-bs-target="#pills-event6" type="button" role="tab" aria-controls="pills-event6"
                                            aria-selected="false">Technology<span>10</span></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="all-event-cards">
                                <div class="tab-content" id="events-tabContent">
                                    <div class="tab-pane fade show active" id="pills-event1" role="tabpanel"
                                        aria-labelledby="pills-tab1">
                                        <div className="row">
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="event-countdown-outer pt-120 gray-300">
                <div class="event-countdown">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="event-countdown-head">
                                    <h2>Next Event</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="timer">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countdown-box">
                                    <div class="countdown-line-shape d-lg-block d-none">
                                        <img src="https://demo.egenslab.com/html/eventlab/assets/images/shapes/countdown-vactor.png" alt="img" />
                                    </div>
                                    <h3 id="days">05</h3>
                                    <h5>Days</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countdown-box">
                                    <div class="countdown-line-shape d-lg-block d-none">
                                        <img src="https://demo.egenslab.com/html/eventlab/assets/images/shapes/countdown-vactor.png" alt="img" />
                                    </div>
                                    <h3 id="hours">05</h3>
                                    <h5>Hour</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countdown-box">
                                    <div class="countdown-line-shape d-lg-block d-none">
                                        <img src="https://demo.egenslab.com/html/eventlab/assets/images/shapes/countdown-vactor.png" alt="img" />
                                    </div>
                                    <h3 id="miniutes">05</h3>
                                    <h5>Miniute</h5>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countdown-box">
                                    <h3 id="seconds">05</h3>
                                    <h5>Secoend</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
