"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../StyleSheet/Home.css"; // Import the external CSS file



const HomePage = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const stats = [
    { label: "Years Of Experience", endValue: 2 },
    { label: "issues resolved", endValue: 300 },
    { label: "satisfied customers", endValue: 100 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });

    // Animate image with custom rotation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, rotate: -180 }, // Changed from -360 to -180
      { opacity: 1, rotate: 45 } // Changed from 0 to 45
    );

    // Animate text
    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 },
      "-=0.5"
    );

    // Numbers animation (only runs once)
    stats.forEach((stat, index) => {
      gsap.to({}, {
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              Math.ceil(this.progress() * stat.endValue),
              stat.endValue
            );
            return newCounts;
          });
        },
      });
    });
  }, []); // Empty dependency array ensures animations run only once

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div ref={textRef} className="home-text">
          <h2 className="heading2"> {/* Increase margin-top */}
            Hello There! I'm <span className="highlight">Rameez Babar</span>
          </h2>
          <h2>AN EXPERIENCED GOOGLE BUSINESS PROFILE EXPERT.</h2>
          <p>
          I specialize in resolving all types of issues related to profile verification, reinstatement and optimization. With a proven track record of improving rankings and achieving compliance with Google's best practices, I provide customized solutions to help businesses stand out online.
          <br />
          I will strengthen your Google presence and help manage your profiles to avoid suspensions or policy violations, maintaining steady business growth by attracting more calls and inquiries from potential clients.
          </p>
          <div className="home-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h1>{counts[index]}+</h1>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          {/* <div className="home-buttons">
            <button className="btn-primary">CV & Credentials</button>
            {/* <button className="btn-secondary">Set Cursor</button> */}
          {/* </div>  */}
        </div>
      </div>
    </section>
  );
};

export default HomePage;






