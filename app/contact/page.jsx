"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "../../StyleSheet/Contact.module.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contactItemsRef = useRef([]);
  const formFieldsRef = useRef([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );

    contactItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, rotate: -10, y: 50 },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 0.8,
          delay: 0.5 + index * 0.2,
        }
      );
    });

    formFieldsRef.current.forEach((field, index) => {
      gsap.fromTo(
        field,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 1 + index * 0.2,
        }
      );
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch("https://formsubmit.co/rameez.ahmed@live.com", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className={styles.contactSection}>
      <div className={styles.container}>
        <h1 ref={headingRef} className={styles.contactHeading}>
          Contact Me
        </h1>
        <p className={styles.contactText}>
          Facing issues with your Google Business Profile? Contact me for quick resolution <br /> and expert optimization to improve your online visibility!
        </p>

        <div className={styles.contactGrid}>
          {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
            <div
              className={styles.contactItem}
              key={title}
              ref={(el) => (contactItemsRef.current[index] = el)}
            >
              <h2>{title}</h2>
              <p>
                {title === "Email"
                  ? "rameezahmedbabbar@gmail.com"
                  : title === "LinkedIn"
                  ? "LinkedIn"
                  : "+923310331339"}
              </p>

              <a
                href={
                  title === "Email"
                    ? "mailto:rameezahmedbabbar@gmail.com"
                    : title === "LinkedIn"
                    ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
                    : "tel:+923310331339"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  {title === "Email" ? "Send an Email" : "Send a Message"}
                </button>
              </a>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Full Name"
            ref={(el) => (formFieldsRef.current[0] = el)}
            className={styles.inputField}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            ref={(el) => (formFieldsRef.current[1] = el)}
            className={styles.inputField}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            placeholder="Your Message"
            ref={(el) => (formFieldsRef.current[2] = el)}
            className={styles.inputField}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;









// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "../../StyleSheet/Contact.module.css"; // Make sure this CSS module has no global selectors like *

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const contactItemsRef = useRef([]);
//   const formFieldsRef = useRef([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );

//     gsap.fromTo(
//       headingRef.current,
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 1, delay: 0.3 }
//     );

//     contactItemsRef.current.forEach((item, index) => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, rotate: -10, y: 50 },
//         {
//           opacity: 1,
//           rotate: 0,
//           y: 0,
//           duration: 1,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: item,
//             start: "top 80%",
//             end: "top 50%",
//             scrub: true,
//           },
//         }
//       );
//     });

//     formFieldsRef.current.forEach((field, index) => {
//       gsap.fromTo(
//         field,
//         { opacity: 0, rotate: -10, x: 50 },
//         {
//           opacity: 1,
//           rotate: 0,
//           x: 0,
//           duration: 1,
//           delay: index * 0.2,
//           scrollTrigger: {
//             trigger: field,
//             start: "top 90%",
//             end: "top 60%",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const form = new FormData();
//       form.append("name", formData.name);
//       form.append("email", formData.email);
//       form.append("message", formData.message);

//       const response = await fetch("https://formsubmit.co/rameez.ahmed@live.com", {
//         method: "POST",
//         body: form,
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error submitting the form. Please check your internet connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="contact" ref={sectionRef} className={styles.contactSection}>
//       <div className={styles.container}>
//         <h1 ref={headingRef} className={styles.contactHeading}>
//           Contact Me
//         </h1>
//         <p className={styles.contactText}>
//           Facing issues with your Google Business Profile? Contact me for quick resolution <br /> and expert optimization to improve your online visibility!
//         </p>

//         <div className={styles.contactGrid}>
//           {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
//             <div
//               className={styles.contactItem}
//               key={title}
//               ref={(el) => (contactItemsRef.current[index] = el)}
//             >
//               <h2>{title}</h2>
//               <p>
//                 {title === "Email"
//                   ? "rameezahmedbabbar@gmail.com"
//                   : title === "LinkedIn"
//                   ? "LinkedIn"
//                   : "+923310331339"}
//               </p>

//               <a
//                 href={
//                   title === "Email"
//                     ? "mailto:rameezahmedbabbar@gmail.com"
//                     : title === "LinkedIn"
//                     ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
//                     : "tel:+923310331339"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button>
//                   {title === "Email" ? "Send an Email" : "Send a Message"}
//                 </button>
//               </a>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSubmit} className={styles.contactForm}>
//           <input
//             type="text"
//             placeholder="Your Full Name"
//             ref={(el) => (formFieldsRef.current[0] = el)}
//             className={styles.inputField}
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             ref={(el) => (formFieldsRef.current[1] = el)}
//             className={styles.inputField}
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea
//             placeholder="Your Message"
//             ref={(el) => (formFieldsRef.current[2] = el)}
//             className={styles.inputField}
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//           <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;






// // "use client";

// // export default function ContactPage() {
// //   return (
// //     <div style={{ padding: "100px 30px" }}>
// //       <h1>Contact Page</h1>
// //       <p>This is the separate contact page with its own route.</p>
// //     </div>
// //   );
// // }
