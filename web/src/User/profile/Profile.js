import React ,{useState} from 'react'
import '../style/style.css'
import '../style/responsive.css'
import '../style/animate.css'
import Header from '../header/Header'
import Hero from '../header-hero/Hero'
import Footer from '../footer/Footer'
import Card from '../card/Card'
import Calendar from 'react-calendar';
import './profile.css'

const Profile = () => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <Header logo={'https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png'} />
      <Hero name={'Profile'}/>
      <div className="event-details-wrapper ">
        <div className="container pt-5 position-relative">
          <div className="ed-main-wrap">
            <div class="ed-tabs-wrapper">
              <div class="tabs-pill">
                <ul class="nav nav-pills justify-content-center" id="pills-tab2" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-details-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-details" type="button" role="tab"
                      aria-controls="pills-details" aria-selected="true"> <i
                        class="bi bi-info-circle"></i> <span>Details</span></button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-edit-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-edit" type="button" role="tab"
                      aria-controls="pills-edit" aria-selected="true"> <i class="bi bi-pencil-square"></i> <span>Edit</span></button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-purchased-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-purchased" type="button" role="tab"
                      aria-controls="pills-purchased" aria-selected="true"> <i class="bi bi-bag"></i> <span>Purchased</span></button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-dashboard-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-dashboard" type="button" role="tab"
                      aria-controls="pills-dashboard" aria-selected="true"> <i class="bi bi-bar-chart-line"></i> <span>Dashboard</span></button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="pills-tabContent2">
                <div class="tab-pane fade show active" id="pills-details" role="tabpanel"
                  aria-labelledby="pills-details-tab">
                  <div class="details-tab-content pt-5">
                    <div className="container shadow p-5">
                      <h2 className='ed-subtitle mb-5'>Profile Information</h2>
                      <div className="row ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-3">
                          <div className="img d-flex justify-content-center align-items-center">
                            <img src="https://demo.egenslab.com/html/eventlab/assets/images/event/event-orgainizer.png" alt="img" className='img-fluid h-75 rounded w-75' />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                          <div className="container">
                            <div className="fname my-2">
                              <span className='me-2'> <b>First Name : </b></span> Abhishek
                            </div>
                            <hr />
                            <div className="lname my-2">
                              <span className='me-2'><b>Last Name : </b></span> Vagadiya
                            </div>
                            <hr />
                            <div className="email my-2">
                              <span className='me-2'><b>Email : </b></span> abhivagadiya@gmail.com
                            </div>
                            <hr />
                            <div className="contact my-2">
                              <span className='me-2'><b>Phone no : </b></span> 7894561230
                            </div>
                            <hr />
                            <div className="country_profile my-2">
                              <span className='me-2'><b>Country : </b></span> India
                            </div>
                            <hr />
                            <div className="info_profile my-2">
                              <span className='me-2'><b>Detail : </b></span> hello!!
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-edit" role="tabpanel"
                  aria-labelledby="pills-edit-tab">
                  <div class="edit-tab-content pt-5">
                    <div className="container">
                      <div className="comment-form m-0 shadow">
                        <h5 className="ed-subtitle">Edit Your Profile</h5>
                        <form action="#" id="comment-form">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="primary-input-group">
                                <input type="text" id="name" placeholder="Enter your first name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="primary-input-group">
                                <input type="text" placeholder="Enter your last name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="primary-input-group">
                                <input type="email" id="email" placeholder="Enter your Email" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="primary-input-group">
                                <div className="input__number-lang">
                                  <div className="input__tel">
                                    <select >
                                      <option selected disabled hidden>Select the country</option>
                                      <option value={'India(+91)'}>India(+91)</option>
                                      <option value={'UK(+44)'}>UK(+44)</option>
                                      <option value={'USA(+1)'}>USA(+1)</option>
                                      <option value={'Australia(+61)'}>Australia(+61)</option>
                                      <option value={'Italy(+39)'}>Italy(+39)</option>
                                    </select>
                                  </div>
                                  <div className="input__tel">
                                    <input name='contactno' type="tel" placeholder='Enter your phone number' />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="primary-input-group">
                                <textarea name="massege" id="massege" cols="30" rows="7"
                                  placeholder="Enter about your self"></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="submit-btn">
                                <button type="submit" className="primary-submit">Update</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-purchased" role="tabpanel"
                  aria-labelledby="pills-purchased-tab">
                  <div class="purchased-tab-content pt-5">
                    <div className="container shadow p-5">
                      <div className="purchased">
                        <h5 className="ed-subtitle">Purchased Event</h5>
                        <div className="row">
                          <Card />
                          <Card />
                          <Card />
                        </div>
                      </div>
                      <div className="calendar my-5">
                        <div className="container-fluid h-100">
                        <h5 className="ed-subtitle">Calendar view</h5>
                          <div className='calendar-container d-flex justify-content-center my-4'>
                            <Calendar onChange={setDate} value={date} className='shadow-none' style={{fontSize: '15px'}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-dashboard" role="tabpanel"
                  aria-labelledby="pills-dashboard-tab">
                  <div class="dashboard-tab-content pt-5">
                    <div className="container shadow p-5">
                      <div className="upcomingEvent">
                      <h5 className="ed-subtitle">Upcoming Event</h5>
                      <div className="row">
                        <Card/>
                        <Card/>
                      </div>
                      </div>
                      <div className="lastSixMonthEvent my-5">
                      <h5 className="ed-subtitle">Last Six Month Event</h5>
                      <div className="row">
                        <Card/>
                      </div>
                      </div>
                    </div>
                  </div>
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

export default Profile
