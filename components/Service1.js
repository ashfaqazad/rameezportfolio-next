"use client";



import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import styles from "../StyleSheet/Services.module.css";

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      cardsRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );
  }, []);



  return (
    <section
      id="services"
      style={{ height: "auto", backgroundColor: "#121212", color: "#fff"}}
      className={styles.servicesSection}
    >
      <div className="container">
        <h1 ref={headingRef} className={styles.servicesHeading}>
          Services
        </h1>
        <p className={styles.servicesSubheading}>
          I transform your innovative ideas into distinctive, high-quality
          web projects that inspire you and captivate your customers.
        </p>

        <div className={styles.servicesCardsGrid}>
          <div ref={(el) => (cardsRef.current[0] = el)}>
            <Card
              title="UI/UX Design"
              description="Crafting intuitive and engaging user interfaces is my passion. I focus on creating visually appealing, user-friendly, and accessible designs."
              buttonLabel="Read More"
              icon="🎨"
            />
          </div>
          <div ref={(el) => (cardsRef.current[1] = el)}>
            <Card
              title="Web Development"
              description="I specialize in building custom websites tailored to your unique needs, from small business sites to large-scale web applications."
              buttonLabel="Read More"
              icon="💻"
            />
          </div>
          <div ref={(el) => (cardsRef.current[2] = el)}>
            <Card
              title="API Integration"
              description="Integrating your website with third-party services and APIs can greatly enhance its functionality and user experience."
              buttonLabel="Read More"
              icon="🔗"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
