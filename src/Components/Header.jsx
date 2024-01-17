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
                        {/* <!-- <li><a className="nav-link scrollto" href="{% url 'resources' %}">Resources</a></li> --> */}
                        <li><a className="nav-link scrollto" href="/noticeboard">Noticeboard</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        {/* <!-- <li><a className="nav-link scrollto" href="{% url 'forum' %}">Forum</a></li>
                    <li><a className="nav-link scrollto" href="{% url 'login' %}">Login</a></li> -->
                    <!-- <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                className="bi bi-chevron-right"></i></a>
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
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>

    )
}
