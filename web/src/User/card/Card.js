import React from 'react'
import { Share2 } from 'lucide-react'

const Card = () => {
    return (
        <>
            <div class="col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms"
                data-wow-duration="1500ms">
                <div class="event-card-md">
                    <div class="event-thumb">
                        <img src="https://demo.egenslab.com/html/eventlab/assets/images/event/ev-md1.png" alt="img" />
                        <div class="event-lavel">
                            <i class="bi bi-diagram-3"></i> <span>500 Seat</span>
                        </div>
                    </div>
                    <div class="event-content">
                        <div class="event-info">
                            <div class="event-date"><a href="/"> <i
                                class="bi bi-calendar2-week"></i> January 21, 2021</a>
                            </div>
                            <div class="event-location"><a href="/"> <i
                                class="bi bi-geo-alt"></i> Broadw, New York</a></div>
                        </div>
                        <h5 class="event-title"><a href="/">Media companies
                            need to better one then educate advertisers.</a></h5>
                        <div class="event-bottom">
                            <div class="event-readme">
                                <a href="/eventdetail">Book Now</a>
                            </div>
                            <div class="event-share-icons">
                                <ul class="share-options">
                                    <li><a href="/"><i class="fab fa-facebook-f" style={{ fontSize: '1rem' }}></i></a></li>
                                    <li><a href="/"><i class="fab fa-instagram" style={{ fontSize: '1rem' }}></i></a></li>
                                    <li><a href="/"><i class="fab fa-linkedin-in" style={{ fontSize: '1rem' }}></i></a></li>
                                    <li><a href="/"><i class="fab fa-twitter" style={{ fontSize: '1rem' }}></i></a></li>
                                </ul>
                                <div class="share-btn"><Share2 /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
