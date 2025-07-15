"use client";

import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show or hide the "Go to Top" button based on scroll position
  const toggleButtonVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // ✅ Safe window usage inside useEffect
  useEffect(() => {
    window.addEventListener("scroll", toggleButtonVisibility);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
    };
  }, []);

  return (
    <footer style={styles.footer}>
      {/* Go to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} style={styles.scrollToTopBtn}>
          <i className="fas fa-arrow-up" style={styles.arrowIcon}></i>
        </button>
      )}

      {/* Social Icons */}
      <div style={styles.socialIcons}>
        <a
          href="https://www.facebook.com/rameezahmed123"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-facebook" style={styles.icon}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rameez-babar-a4a7aa53"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
        <a
          href="https://www.instagram.com/rameezbabar2"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-instagram" style={styles.icon}></i>
        </a>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>Copyright © Rameez Babar - All rights reserved | 2025</p>
      </div>
    </footer>
  );
};

// Inline styles for the component
const styles = {
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    borderTop: "2px solid #fff",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
    
  },
  iconLink: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
  },
  icon: {
    fontSize: "24px",
  },
  copyright: {
    fontSize: "14px",
    lineHeight: "1.5",
  },
  scrollToTopBtn: {
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  arrowIcon: {
    marginRight: "5px",
    fontSize: "16px",
  },
};

export default Footer;








// "use client";



// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Show or hide the "Go to Top" button based on scroll position
//   const toggleButtonVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Listen for scroll events
//   window.addEventListener("scroll", toggleButtonVisibility);

//   return (
//     <footer style={styles.footer}>
//       {/* Go to Top Button */}
//       {isVisible && (
//         <button onClick={scrollToTop} style={styles.scrollToTopBtn}>
//           <i className="fas fa-arrow-up" style={styles.arrowIcon}></i>
//         </button>
//       )}

//       {/* Social Icons */}
//       <div style={styles.socialIcons}>
//         <a
//           href="https://www.facebook.com/rameezahmed123"  // Facebook link
//           target="_blank"
          
//           rel="noopener noreferrer"
//           style={styles.iconLink}
//         >
//           <i className="fab fa-facebook" style={styles.icon}></i>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/rameez-babar-a4a7aa53"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.iconLink}
//         >
//           <i className="fab fa-linkedin" style={styles.icon}></i>
//         </a>
//         <a
//           href="https://www.instagram.com/rameezbabar2"  // Instagram link
//           target="_blank"
//           rel="noopener noreferrer"
//           style={styles.iconLink}
//         >
//           <i className="fab fa-instagram" style={styles.icon}></i>
//         </a>
//       </div>

//       {/* Copyright */}
//       <div style={styles.copyright}>
//         <p>Copyright © Rameez Babar - All rights reserved | 2025</p>
//       </div>
//     </footer>
//   );
// };

// // Inline styles for the component
// const styles = {
//   footer: {
//     backgroundColor: "#000", // Black background
//     color: "#fff", // White text
//     padding: "20px 0",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     position: "relative",
//     borderTop: "2px solid #fff", // Border at the top of the footer
//   },
//   socialIcons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "20px",
//   },
//   iconLink: {
//     color: "#fff",
//     fontSize: "20px",
//     textDecoration: "none",
//   },
//   icon: {
//     fontSize: "24px",
//   },
//   copyright: {
//     fontSize: "14px",
//     lineHeight: "1.5",
//   },
//   scrollToTopBtn: {
//     position: "absolute",
//     top: "-20px", // Position above the footer
//     left: "50%",
//     transform: "translateX(-50%)",
//     backgroundColor: "#007bff", // Primary color
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   arrowIcon: {
//     marginRight: "5px",
//     fontSize: "16px",
//   },
// };

// export default Footer;


