import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Devmate from "./Pages/Devmate";
import Aos from "aos";
import "aos/dist/aos.css"
import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Counts from "./Components/Counts";
import Details from "./Components/Details";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import FAQs from "./Components/FAQs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
    React.useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/devmate" element={<Devmate />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

function Home() {
    return (
        <>
            <Hero />
            <section className="main">
                <About />
                <Features />
                <Counts />
                <Details />
                <Testimonials />
                <Team />
                <FAQs />
                <ContactUs />
            </section>
        </>

    )
}

export default App