import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/Projects.css"; // Link to the updated CSS file
import styles from '../StyleSheet/Projects.module.css';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);



  useEffect(() => {
    // Animation for heading
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
        },
      }
    );
  
    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100", // ScrollTrigger optimized start
            delay: index * 0.1,
            onEnter: () => {
              // Reset any previous layout shifts
              card.style.transform = 'none'; 
              card.style.opacity = 1;
            },
          },
        }
      );
    });
  }, []);
  



  const projectsData = [
    {
      name: "John D.",
      role: "Small Business Owner",
      feedback:
        "Rameez transformed my struggling Google Business Profile into a powerful marketing tool. His expertise in reinstatement and optimization has significantly increased my customer inquiries. Highly recommended!",
    },
    {
      name: "Emily R.",
      role: "Local Store Manager",
      feedback:
        "Thanks to Rameez, our business now ranks at the top in local searches. His attention to detail and commitment to compliance with Google's policies have been invaluable. A true expert in his field!",
    },
    {
      name: "Michael S.",
      role: "Freelance Consultant",
      feedback:
        "I was struggling with a suspended profile until I found Rameez. He resolved the issue quickly and provided ongoing support to keep my profile updated and visible. Fantastic service!",
    },
    {
      name: "Sarah L.",
      role: "Café Owner",
      feedback:
        "Rameez’s knowledge of local SEO and Google Business Profile management has been a game-changer for my business. My profile is now optimized, and I’m seeing more foot traffic than ever!",
    },
    {
      name: "David P.",
      role: "Digital Marketer",
      feedback:
        "Working with Rameez was an excellent decision. His ability to simplify complex processes and deliver results for profile verification and optimization is truly impressive. My clients couldn’t be happier!",
    },
  ];

  return (

    <section id="testimonials" className={styles.projectsSection}>
      <h1 ref={headingRef} className={styles.projectsHeading}>
        Testimonials
      </h1>
      <div className={styles.projectsCardsGrid}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.projectCard}
          >
            <h5 className={styles.cardSubt}>{project.name}</h5>
            <p className={styles.cardRole}>{project.role}</p>
            <p className={styles.cardFeedback}>"{project.feedback}"</p>
          </div>
        ))}
      </div>
    </section>




  );
};

export default Projects;


