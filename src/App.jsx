import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DevSocLogo from "./assets/img/DevSoc_Logo.png"
import Devmate from "./Pages/Devmate";
import Aos from "aos";
import "aos/dist/aos.css"
import React from "react";

function App() {
    React.useEffect(() => {
        Aos.init()
    }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/devmate" element={<Devmate />} />
            </Routes>
        </Router>
    )
}

function Home() {
    return (
        <header id="header" class="fixed-top d-flex align-items-center header-transparent">
            <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <h1><a href="index.html"><span><img src={DevSocLogo} alt="" /></span></a></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="/about">About</a></li>
                        {/* <!-- <li><a class="nav-link scrollto" href="{% url 'resources' %}">Resources</a></li> --> */}
                        <li><a class="nav-link scrollto" href="/noticeboard">Noticeboard</a></li>
                        <li><a class="nav-link scrollto" href="#team">Team</a></li>
                        {/* <!-- <li><a class="nav-link scrollto" href="{% url 'forum' %}">Forum</a></li>
                        <li><a class="nav-link scrollto" href="{% url 'login' %}">Login</a></li> -->
                        <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                    class="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> --> */}
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>

    )
}

export default App