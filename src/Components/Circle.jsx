import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const onMouseEnterNavbar = () => {
      gsap.to(circleRef.current, {
        scale: 3,
        backgroundColor: "#B98BD0"
      });

      gsap.to(".navbar a:hover", {
        color: "#3C0982",
        fontWeight: "900",
        fontSize: "1.4vw",
        zIndex: 100,
        duration: 0.1,
      });

      gsap.to(".navbar a:hover", {
        x: gsap.utils.lerp(-20, 20, val),
        duration: 0.2, 
        scale: 1
      });
    };

    const onMouseLeaveNavbar = () => {
      gsap.to(circleRef.current, {
        scale: 1,
        backgroundColor: "#ff0000",
      });

      gsap.to(".navbar a", {
        color: "#010483",
        fontWeight: 500,
        duration: 0.1,
        fontSize:"1vw",
        scale: 1
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach(link => {
      link.addEventListener("mouseenter", onMouseEnterNavbar);
      link.addEventListener("mouseleave", onMouseLeaveNavbar);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      navbarLinks.forEach(link => {
        link.removeEventListener("mouseenter", onMouseEnterNavbar);
        link.removeEventListener("mouseleave", onMouseLeaveNavbar);
      });
    };
  }, []);


  return (
    <div
      ref={circleRef}
      className="Circle"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default Circle;
