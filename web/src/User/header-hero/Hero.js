import React from 'react'

const Hero = ({name}) => {
    return (
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-12">
                        <div class="breadcrumb-content">
                            <h2 class="page-title">{name}</h2>
                            <ul class="page-switcher">
                                <li><a href="/">Home <i class="bi bi-caret-right"></i></a></li>
                                <li>{name}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
