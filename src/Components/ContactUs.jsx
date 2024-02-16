import React from 'react'
import { Envelope, GeoAlt, Phone } from "react-bootstrap-icons";

export default function ContactUs() {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="row">

                    <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                        <div className="info">
                            <div className="address">
                                <div className="icon">
                                    <GeoAlt />
                                </div>
                                <h4>Location:</h4>
                                <p>Technology Students' Gymkhana, IIT Kharagpur</p>
                            </div>

                            <div className="email">
                                <div className="icon">
                                    <Envelope />
                                </div>
                                <h4>Email:</h4>
                                <p>devsoc.iitkgp@gmail.com</p>
                            </div>

                            <div className="phone">
                                <div className="icon">
                                    <Phone />
                                </div>
                                <h4>Call:</h4>
                                <p>+91 93548 17605</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                        <form action="/contact" method="post">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="text-center"><button type="submit" className="btn btn-success">Send Message</button></div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}
