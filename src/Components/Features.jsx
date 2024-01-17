import React from 'react'

export default function Features() {
    return (
        <section id="features" className="features">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>Check The Features</p>
                </div>

                <div className="row" data-aos="fade-left">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                            <h3><a href="">Buy and sell</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }}></i>
                            <h3><a href="">Results</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                            <i className="ri-calendar-todo-line" style={{ color: "#e80368" }}></i>
                            <h3><a href="">Slot booking</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <i className="ri-contacts-line" style={{ color: "#e361ff" }}></i>
                            <h3><a href="">Contacts</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                            <i className="ri-building-line" style={{ color: "#47aeff" }}></i>
                            <h3><a href="">Halls</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <i className="ri-mic-line" style={{ color: "#ffa76e" }}></i>
                            <h3><a href="">Announcements</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
                            <i className="ri-file-list-3-line" style={{ color: "#11dbcf" }}></i>
                            <h3><a href="">Events</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                            <i className="ri-menu-line" style={{ color: "#4233ff" }}></i>
                            <h3><a href="">Mess menu</a></h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
