import React from "react"
import { List, X } from "react-bootstrap-icons"
import DevSocLogo from "../assets/img/DevSoc_Logo.png"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/user/userSlice"

export default function Header({ setShowPopup }) {
    const dispactch = useDispatch()
    const [navbarCollapsed, setNavbarCollapsed] = React.useState(true)
    const user = useSelector(state => state.user.user)
    return (        
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html"><span><img src={DevSocLogo} alt="" /></span></a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
                </div>

                <nav id="navbar" className={`navbar${navbarCollapsed ? "" : " navbar-mobile"}`}>
                    <ul>
                        <li id="home"><a className={`nav-link scrollto active`} href="#hero">Home</a></li>
                        <li id="devmate"><a className={`nav-link`} href="/devmate">Devmate</a></li>
                        <li><a className="nav-link scrollto" href="/about">About</a></li>
                        <li><a className="nav-link scrollto" href="/noticeboard">Noticeboard</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li>
                            {
                                user ? <button className="nav-link scrollto" onClick={() => {
                                    dispactch(logout())
                                }}>Logout</button> : <button className="nav-link scrollto" onClick={(e) => {
                                    e.stopPropagation()
                                    setShowPopup(p => !p)
                                }}>Register/Login</button>
                            }
                        </li>
                    </ul>
                    <div className="icon mobile-nav-toggle">
                        {
                            navbarCollapsed ? <List onClick={() => setNavbarCollapsed(p => !p)} /> : <X onClick={() => setNavbarCollapsed(p => !p)} />
                        }
                    </div>
                </nav>

            </div>
        </header>
    )
}
