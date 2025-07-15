"use client";


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../StyleSheet/Modal.module.css";

const Modal = ({ title, description, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in",
      onComplete: onClose, // Trigger onClose after animation
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
        <button className={styles.primaryButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;














// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import styles from "../StyleSheet/Modal.module.css";

// const Modal = ({ title, description, onClose }) => {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       modalRef.current,
//       { opacity: 0, y: -50 },
//       { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
//     );
//   }, []);

//   const handleClose = () => {
//     gsap.to(modalRef.current, {
//       opacity: 0,
//       y: -50,
//       duration: 0.5,
//       ease: "power2.in",
//       onComplete: onClose,
//     });
//   };

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent} ref={modalRef}>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <button className='btn btn-primary' onClick={handleClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
