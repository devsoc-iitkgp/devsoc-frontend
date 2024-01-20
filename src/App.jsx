import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Devmate from "./Pages/Devmate";
import Aos from "aos";
import "aos/dist/aos.css"
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import Counts from "./Components/Counts";
import Details from "./Components/Details";
import Team from "./Components/Team";
import FAQs from "./Components/FAQs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Circle from "./Components/Circle";

gsap.registerPlugin(ScrollTrigger);

import useScript from "./Hooks/useScript";

function App() {
    React.useEffect(() => {
        gsap.to('body', {
            backgroundColor: '#E2A9FF',
            scrollTrigger: {
              trigger: 'body',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
        });
        Aos.init()
    }, [])
    useScript("/js/main.js")
    useScript("/js/notice.js")
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
                <Circle />
                <About />
                <Features />
                <Counts />
                <Details />
                <Team />
                <FAQs />
                <ContactUs />
            </section>
        </>

    )
}

export default App

