import React from 'react'

export default function Counts() {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row" data-aos="fade-up">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            <span data-purecounter-start="0" data-purecounter-end="3.8" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Rating</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-person-lines-fill"></i>
                            <span data-purecounter-start="0" data-purecounter-end="11" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Team members</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-headset"></i>
                            <span data-purecounter-start="0" data-purecounter-end="1444" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Registrations</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-download"></i>
                            <span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Downloads</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
