import Asset5 from "../assets/img/Asset5.svg";
import Asset6 from "../assets/img/Asset6.svg";
import Asset8 from "../assets/img/Asset8.svg";
import Asset9 from "../assets/img/Asset9.svg";

export default function Hero() {
    return (

        <section id="hero">

            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">

                        </div>
                    </div>
                    <div style={{ display: "inline" }}>
                        <img src={Asset5} alt="" className="animated asset5 sized" />
                        <img src={Asset6} alt="" className="animated asset6 sized" />
                        <img src={Asset8} alt="" style={{ position: "absolute", top: "7%", left: "30%" }} className="animated asset6 sized" />
                        <img src={Asset9} alt="" style={{ position: "absolute", top: "7%", left: "70%" }} className="animated asset6 sized" />
                    </div>
                </div>
            </div>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
        </section>
    )
}
