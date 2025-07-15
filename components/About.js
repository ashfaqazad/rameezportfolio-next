"use client";



import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import "../StyleSheet/About.css";
import styles from '../StyleSheet/About.module.css';


// import styles from "../StyleSheet/About.module.css"; // Import CSS module

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const expandedContentRef = useRef(null);

  const [expanded, setExpanded] = useState(false);




  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,

        { x: -400, opacity: 0, delay: 1 },
        { x: 0, opacity: 1, duration: 2 }


      );

      // Text animation
      gsap.fromTo(
        textRef.current,
        { x: 400, opacity: 0, delay: 1 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 2 }

      );
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);



  const handleReadMore = () => {
    gsap.to([imageRef.current, textRef.current], {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => setExpanded(true),
    });
  };

  const handleShowLess = () => {
    if (expandedContentRef.current) {
      gsap.to(expandedContentRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          setExpanded(false);

          // ✅ Reset Animation for Image and Text
          gsap.set(imageRef.current, { opacity: 1, scale: 1 });
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { opacity: 0, scale: 0.8 },
              { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
            );
          }

          // ✅ Scroll wapas About Section par le aayega
          setTimeout(() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }, 100); // Small delay to allow re-rendering
        },
      });
    }
  };




  useEffect(() => {
    if (expanded && expandedContentRef.current) {
      gsap.fromTo(
        expandedContentRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [expanded]);

  return (
    <section id="about">
      <div className={styles.aboutContainer}>
        {!expanded ? (
          <>
            <div ref={imageRef} className={styles.aboutImage}>
              <img src="/Images/image.jpeg" alt="Profile" />
            </div>
            <div ref={textRef} className={styles.aboutText}>

              <h2>About Me</h2>
              <p className={styles.justifyText}>
                <span className={styles.highlight}>I am Rameez Babar</span> {" "}
                 a Google Business Profile expert with a Master's in Business Administration (Marketing) and a government-issued SEO certification. With over 2 years of experience, I’ve resolved 300+ profile issues and specialize in Google Business Profile management and local SEO.

              </p>
              <button onClick={handleReadMore}>Read More</button>
            </div>
          </>
        ) : (
          <div
            ref={expandedContentRef}
            className={`${styles.aboutExpandedText} d-flex justify-content-center align-items-center flex-column text-center`}
          >
            <h2>About Me</h2>
            <p >
              Hello, I'm Rameez Babar, an experienced Google Business Profile expert with a strong background in digital marketing.
               <br />
              I have successfully resolved over 300+ Google Business Profile issues, helping businesses restore their online presence and improve their visibility. I hold a Master's in Business Administration with a focus on Marketing, which I completed in 2009. Since then, I have been actively pursuing digital marketing and continually improving my skills. I have completed courses in HTML, CSS, Python, and SEO and I also hold a government-issued certification in SEO.
               <br />
              For the past 2+ years, I have focused on mastering Google Business Profile management and local SEO, gaining extensive knowledge of how to optimize local businesses for search and maps. I understand the critical importance of helping small businesses show up on Google and I have successfully resolved a wide range of issues faced by these businesses, making sure they stand out to potential clients.
            </p>
            <button onClick={handleShowLess}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;







// "use client";


// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import "../StyleSheet/About.css";

// const About = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);
//   const expandedContentRef = useRef(null);

//   const [expanded, setExpanded] = useState(false);

//   // Handle "Read More" click
//   const handleReadMore = () => {
//     gsap.to([imageRef.current, textRef.current], {
//       opacity: 0,
//       scale: 0.8,
//       duration: 0.8,
//       ease: "power2.out",
//       onComplete: () => setExpanded(true),
//     });
//   };

//   const handleShowLess = () => {
//     if (expandedContentRef.current) {
//       gsap.to(expandedContentRef.current, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         ease: "power2.out",
//         onComplete: () => {
//           setExpanded(false);
  
//           // Reset image visibility explicitly
//           gsap.set(imageRef.current, { opacity: 1, scale: 1 });  // Ensure image is visible
  
//           // Animate About Me content and image back in
//           if (textRef.current) {
//             gsap.fromTo(
//               textRef.current,
//               { opacity: 0, scale: 0.8 },
//               { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
//             );
//           }
  
//           // Ensure image is visible and animate it back in
//           if (imageRef.current) {
//             gsap.fromTo(
//               imageRef.current,
//               { opacity: 0, scale: 0.8 },
//               { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
//             );
//           }
//         },
//       });
//     }
//   };
  
//   useEffect(() => {
//     if (expanded && expandedContentRef.current) {
//       gsap.fromTo(
//         expandedContentRef.current,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
//       );
//     }
//   }, [expanded]);

//   return (
//     <section id="about">
//       <div className="about-container">
//         {!expanded ? (
//           <>
//             <div ref={imageRef} className="about-image">
//               <img src="/Images/image.jpeg" alt="Profile" />
//             </div>
//             <div ref={textRef} className="about-text">
//               <h2>About Me</h2>
//               <p>
//                 I am Rameez Babar, a Google Business Profile expert with a Master's in Business Administration (Marketing) and a government-issued SEO certification. With over 2 years of experience, I’ve resolved 300+ profile issues and specialize in Google Business Profile management and local SEO.
//               </p>
//               <button onClick={handleReadMore}>Read More</button>
//             </div>
//           </>
//         ) : (
//           <div
//             ref={expandedContentRef}
//             className="about-expanded-text d-flex justify-content-center align-items-center flex-column text-center"
//           >
//             <h2>About Me</h2>
//             <p>
//               Hello, I'm Rameez Babar, an experienced Google Business Profile expert with a strong background in digital marketing.
//               <br />
//               I have successfully resolved over 300+ Google Business Profile issues, helping businesses restore their online presence and improve their visibility. I hold a Master's in Business Administration with a focus on Marketing, which I completed in 2009. Since then, I have been actively pursuing digital marketing and continually improving my skills. I have completed courses in HTML, CSS, Python, and SEO and I also hold a government-issued certification in SEO.
//               <br />
//               For the past 2+ years, I have focused on mastering Google Business Profile management and local SEO, gaining extensive knowledge of how to optimize local businesses for search and maps. I understand the critical importance of helping small businesses show up on Google and I have successfully resolved a wide range of issues faced by these businesses, making sure they stand out to potential clients.
//             </p>
//             <button className="bt btn-primary" onClick={handleShowLess}>Show Less</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default About;
