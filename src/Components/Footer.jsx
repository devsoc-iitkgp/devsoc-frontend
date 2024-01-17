import DevSocLogo from '../assets/img/Devsoc_Logo.png';
import SlackLogo from '../assets/img/slack_devsoc.png';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row footerdiv">
                        <div className="subdiv" style={{ textAlign: "center" }}>
                            <img src={DevSocLogo} alt="" style={{ height: "70%", width: "auto" }} />
                        </div>
                        <div className="subdiv">
                            <div className="footer-info">
                                <h3>Developers' Society</h3>
                                <p className="pb-3"><em>Developers’ Society is an initiative by the Tech Team, TSG to foster and encourage the
                                    development culture of IIT Kharagpur.</em></p>
                                <p>
                                    Technology Students' Gymkhana, <br />
                                        IIT Kharagpur<br /><br />
                                            <strong>Phone:</strong> +91 93548 17605<br />
                                                <strong>Email:</strong> devsoc.iitkgp@gmail.com<br />
                                                </p>
                                                <div className="social-links mt-3">
                                                    <a href="https://www.facebook.com/devsoc.iitkgp" className="facebook" target="_blank"><i
                                                        className="bx bxl-facebook"></i></a>
                                                    <a href="https://www.instagram.com/devsoc.iitkgp/" className="instagram" target="_blank"><i
                                                        className="bx bxl-instagram"></i></a>
                                                    <a href="https://www.linkedin.com/company/devsoc-iitkgp/mycompany/" className="linkedin"
                                                        target="_blank"><i className="bx bxl-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                            <div className="subdiv footer-links">
                                                <h4>Useful Links</h4>
                                                <ul>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfy2uGMAqG__YxKqoiDhOSsYoLJScyQnjy3q1F4TSP1T6BjCw/viewform?fbclid=IwAR0-SJ26q5KNFl3_fyOkZ7iYYVYwG2ndJ0sXqAnQlf2YB1xXfztMDSkS3FY">GSOC Community</a></li>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="https://developers-society-hq.slack.com/join/shared_invite/zt-1mqm2kk1c-Aum_k0VaS8DJ9k6Y7Ug8BQ?fbclid=IwAR0KaYZe0qAmgeS0barS3elH2xRqdf8KcQuYPuFblJh2t8usRi2lxHIWvAU#/shared-invite/email">Slack Community</a></li>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="https://gymkhana.iitkgp.ac.in/">TSG, IIT Kharagpur</a></li>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="http://www.iitkgp.ac.in/">IIT Kharagpur</a></li>
                                                </ul>
                                                <h4>Our Projects</h4>
                                                <ul>
                                                    <li><i className="bx bx-chevron-right"></i> <a href="https://play.google.com/store/apps/details?id=com.apnainsti&fbclid=IwAR2n5vQApgKpVXTXjcVD_3iXR-44UCkC0jxMmwRdTZxBb4PtvmlpjcrN1R0&pli=1">ApnaInsti</a></li>
                                                </ul>
                                            </div>

                                            <div className="subdiv footer-newsletter" style={{ textAlign: "center" }}>
                                                <p>Subscribe to our newsletter for regular updates.</p>
                                                <form action="" method="POST" id="frmSubmit">
                                                    <input type="email" name="Email" placeholder="Enter your email" /><input type="submit" value="Subscribe" id="btnSubmit" />
                                                </form>
                                                <h4 style={{ marginTop: "10px" }}>Join our slack community</h4>
                                                <img src={SlackLogo} alt="" style={{ width: "auto", height: "50%", float: "left" }} />

                                            </div>

                                        </div>
                                    </div>
                            </div>

                            <div className="container">
                                <div className="copyright">
                                    &copy; Copyright <strong><span>Developers' Society</span></strong>. All Rights Reserved
                                </div>
                                <div className="credits">
                                    Designed by <a href="https://www.facebook.com/devsoc.iitkgp">Developers' Society</a>
                                </div>
                            </div>
                        </footer>
                        )
}
