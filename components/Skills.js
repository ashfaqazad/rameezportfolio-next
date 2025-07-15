"use client";



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../StyleSheet/Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center",
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotate: -90, x: -200, opacity: 0 },
        {
          rotate: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            delay: index * 0.2,
          },
        }
      );
    });
  }, []);

  const svgIcon = (
    <svg
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={styles.svgIcon}
    >
      <path
        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"
        fill="#0d6efd"
      ></path>
    </svg>
  );

  const skillsData = [
    {
      category: "Google Business Profile Management",
      skill: "Profile Verification, Reinstatement and Optimization",
      description:
        "Expert in resolving verification and reinstatement issues, as well as managing and optimizing Google Business Profiles to improve visibility and outrank competitors.",
    },
    {
      category: "Local SEO Expertise",
      skill: "Keyword Research, On-Page & Off-Page Optimization",
      description:
        "Proficient in local SEO strategies that boost search rankings and help businesses appear in top local searches.",
    },
    {
      category: "Technical & Marketing Skills",
      skill: "SEO, HTML, CSS, Python, Digital Marketing",
      description:
        "Equipped with technical and marketing expertise to implement robust strategies that deliver results.",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        // minHeight: "100vh",
        padding: "1rem 1rem",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div className={styles.skillsContainer}>
        <h1 ref={headingRef} className={styles.skillsHeading}>
          My Skills
        </h1>
        <div className={styles.skillsCardsGrid}>
          {skillsData.map((section, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.skillsCard}
            >
              <h5 className={styles.cardTitle}>{section.category}</h5>
              <div className={styles.skillsContent}>
                {svgIcon} <strong className={styles.fs4}>Skills:</strong>{" "}
                {section.skill}
                <p>
                  {svgIcon} <strong className={styles.fs4}>Description:</strong>{" "}
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;







// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../StyleSheet/Skills.css"; // Import the CSS file

// gsap.registerPlugin(ScrollTrigger);

// const Skills = () => {
//   const headingRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       headingRef.current,
//       { x: -200, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top center",
//         },
//       }
//     );

//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { rotate: -90, x: -200, opacity: 0 },
//         {
//           rotate: 0,
//           x: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top center+=100",
//             delay: index * 0.2,
//           },
//         }
//       );
//     });
//   }, []);

//   const svgIcon = (
//     <svg
//       width="16"
//       height="16"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 20 20"
//       className="svg-icon"
//     >
//       <path
//         d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"
//         fill="#0d6efd"
//       ></path>
//     </svg>
//   );

//   const skillsData = [
//     {
//       category: "Google Business Profile Management",
//       skill: "Profile Verification, Reinstatement and Optimization",
//       description: "Expert in resolving verification and reinstatement issues, as well as managing and optimizing Google Business Profiles to improve visibility and outrank competitors.",
//     },
//     {
//       category: "Local SEO Expertise",
//       skill: "Keyword Research, On-Page & Off-Page Optimization",
//       description: "Proficient in local SEO strategies that boost search rankings and help businesses appear in top local searches.",
//     },
//     {
//       category: "Technical & Marketing Skills",
//       skill: "SEO, HTML, CSS, Python, Digital Marketing",
//       description: "Equipped with technical and marketing expertise to implement robust strategies that deliver results.",
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       style={{
//         minHeight: "100vh",
//         padding: "1rem 1rem",
//         boxSizing: "border-box",
//         overflow: "hidden",
//       }}
//     >
//       <div className="skills-container">
//         <h1 ref={headingRef} className="skills-heading">
//           My Skills
//         </h1>
//         <div className="skills-cards-grid">
//           {skillsData.map((section, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="skills-card"
//             >
//               <h5 className="card-title">{section.category}</h5>
//               <div className="skills-content">
//                  {svgIcon} <strong className="fs-4">Skills:</strong> {section.skill}
//                  {/* {svgIcon} <span className="highlight">Skills:</span> {section.skill} */}

//                 <p>
//                 {svgIcon} <strong className="fs-4">Description:</strong> {section.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
