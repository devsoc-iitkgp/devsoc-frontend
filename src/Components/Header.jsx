import { List, X } from "react-bootstrap-icons"
import DevSocLogo from "../assets/img/DevSoc_Logo.png"

export default function Header() {
    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html"><span><img src={DevSocLogo} alt="" /></span></a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li  id="home"><a className={`nav-link scrollto active`} href="#hero">Home</a></li>
                        <li id="devmate"><a className={`nav-link`} href="/devmate">Devmate</a></li>
                        <li><a className="nav-link scrollto" href="/about">About</a></li>
                        <li><a className="nav-link scrollto" href="/noticeboard">Noticeboard</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <div className="icon mobile-nav-toggle">
                        <List />
                        <X style={{display: "none"}} />
                    </div>
                </nav>

            </div>
        </header>

    )
}
