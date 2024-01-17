import React from 'react'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <div className="row" style={{ textAlign: "center" }}>
                    <h1 style={{ marginBottom: "50px" }}>Presenting to you the very first project of <b>Developers' Society</b>
                    </h1>
                </div>

                <div className="row">
                    <iframe width="560" height="600" src="https://www.youtube.com/embed/L9ee5lfeP-8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                        data-aos="fade-left">
                        <h3>ApnaInsti</h3>
                        <p>Get ready for the ultimate KGP experience with ApnaInsti - the ultimate tool for staying
                            connected with all happenings on campus. ApnaInsti offers features like slot booking, campus
                            events, buy and sell, mess menu and much more. Never miss out on important information again!
                            Download now and make your campus life easier! </p>

                        <a href="https://play.google.com/store/apps/details?id=com.apnainsti&fbclid=IwAR2n5vQApgKpVXTXjcVD_3iXR-44UCkC0jxMmwRdTZxBb4PtvmlpjcrN1R0&pli=1"
                            style={{ width: "100% !important" }}><button className="btn btn-primary">Download Now</button></a>

                    </div>
                </div>

            </div>
        </section>
    )
}
