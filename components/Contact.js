// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "../StyleSheet/Contact.module.css"; // Make sure this CSS module has no global selectors like *

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















// // import React, { useEffect, useRef, useState } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import styles from "../StyleSheet/Contact.module.css"; // Import the CSS module

// // gsap.registerPlugin(ScrollTrigger);

// // const Contact = () => {
// //   const sectionRef = useRef(null);
// //   const headingRef = useRef(null);
// //   const contactItemsRef = useRef([]);
// //   const formFieldsRef = useRef([]);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   useEffect(() => {
// //     gsap.fromTo(
// //       sectionRef.current,
// //       { opacity: 0, y: 50 },
// //       { opacity: 1, y: 0, duration: 1 }
// //     );

// //     gsap.fromTo(
// //       headingRef.current,
// //       { opacity: 0, x: -100 },
// //       { opacity: 1, x: 0, duration: 1, delay: 0.3 }
// //     );

// //     contactItemsRef.current.forEach((item, index) => {
// //       gsap.fromTo(
// //         item,
// //         { opacity: 0, rotate: -10, y: 50 },
// //         {
// //           opacity: 1,
// //           rotate: 0,
// //           y: 0,
// //           duration: 1,
// //           delay: index * 0.2,
// //           scrollTrigger: {
// //             trigger: item,
// //             start: "top 80%",
// //             end: "top 50%",
// //             scrub: true,
// //           },
// //         }
// //       );
// //     });

// //     formFieldsRef.current.forEach((field, index) => {
// //       gsap.fromTo(
// //         field,
// //         { opacity: 0, rotate: -10, x: 50 },
// //         {
// //           opacity: 1,
// //           rotate: 0,
// //           x: 0,
// //           duration: 1,
// //           delay: index * 0.2,
// //           scrollTrigger: {
// //             trigger: field,
// //             start: "top 90%",
// //             end: "top 60%",
// //             scrub: true,
// //           },
// //         }
// //       );
// //     });
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };



// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   setIsSubmitting(true);

// //   //   try {
// //   //     // FormSubmit.co endpoint
// //   //     const response = await fetch("https://formsubmit.co/ajax/rameez.ahmed@live.com", {
// //   //       method: "POST",
// //   //       headers: {
// //   //         "Content-Type": "application/json",
// //   //       },
// //   //       body: JSON.stringify(formData),
// //   //     });

// //   //     if (response.ok) {
// //   //       console.log("Form successfully submitted!");
// //   //       alert("Message sent successfully!");
// //   //       setFormData({
// //   //         name: "",
// //   //         email: "",
// //   //         message: "",
// //   //       });
// //   //     } else {
// //   //       console.error("Failed to submit form.");
// //   //       alert("Something went wrong. Please try again.");
// //   //     }
// //   //   } catch (error) {
// //   //     console.error("Error:", error);
// //   //     alert("Error submitting the form. Please check your internet connection.");
// //   //   } finally {
// //   //     setIsSubmitting(false);
// //   //   }
// //   // };



// //   const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setIsSubmitting(true);

// //   try {
// //     const form = new FormData();
// //     form.append("name", formData.name);
// //     form.append("email", formData.email);
// //     form.append("message", formData.message);

// //     const response = await fetch("https://formsubmit.co/rameez.ahmed@live.com", {
// //       method: "POST",
// //       body: form,
// //     });

// //     if (response.ok) {
// //       alert("Message sent successfully!");
// //       setFormData({
// //         name: "",
// //         email: "",
// //         message: "",
// //       });
// //     } else {
// //       alert("Something went wrong. Please try again.");
// //     }
// //   } catch (error) {
// //     console.error("Error:", error);
// //     alert("Error submitting the form. Please check your internet connection.");
// //   } finally {
// //     setIsSubmitting(false);
// //   }
// // };


// //   return (
// //     <section id="contact" ref={sectionRef} className={styles.contactSection}>
// //       <div className={styles.container}>
// //         <h1 ref={headingRef} className={styles.contactHeading}>
// //           Contact Me
// //         </h1>
// //         <p className={styles.contactText}>
// //           Facing issues with your Google Business Profile? Contact me for quick resolution <br /> and expert optimization to improve your online visibility!
// //         </p>





// //         <div className={styles.contactGrid}>
// //            {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
// //             <div
// //               className={styles.contactItem}
// //               key={title}
// //               ref={(el) => (contactItemsRef.current[index] = el)}
// //             >



// //               <h2>{title}</h2>
// //               <p>
// //                 {title === "Email"
// //                   ? "rameezahmedbabbar@gmail.com"
// //                   : title === "LinkedIn"
// //                     ? "LinkedIn"
// //                     : "+923310331339 "}
// //               </p>

// //               <a
// //                 href={
// //                   title === "Email"
// //                     ? "mailto:rameezahmedbabbar@gmail.com"
// //                     : title === "LinkedIn"
// //                       ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
// //                       : `tel:+923310331339`
// //                 }
// //                 target="_blank" // Open the link in a new tab
// //                 rel="noopener noreferrer" // Security measure when using target="_blank"
// //               >
// //                 <button>
// //                   {title === "Email" ? "Send an Email" : "Send a Message"}
// //                 </button>
// //               </a>




// //               {/* <h2>{title}</h2>
// //               <p>
// //                 {title === "Email"
// //                   ? "rameezahmedbabbar@gmail.com"
// //                   : title === "LinkedIn"
// //                   ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
// //                   : "+923310331339 "}
// //               </p>
// //               // <button>
// //               //   {title === "Email" ? "Send an Email" : "Send a Message"}
// //               // </button> */}
// //             </div>
// //           ))}
// //         </div>


// //         <form onSubmit={handleSubmit} className={styles.contactForm}>
// //           <input
// //             type="text"
// //             placeholder="Your Full Name"
// //             ref={(el) => (formFieldsRef.current[0] = el)}
// //             className={styles.inputField}
// //             name="name"
// //             value={formData.name}
// //             onChange={handleInputChange}
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Your Email"
// //             ref={(el) => (formFieldsRef.current[1] = el)}
// //             className={styles.inputField}
// //             name="email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             required
// //           />
// //           <textarea
// //             placeholder="Your Message"
// //             ref={(el) => (formFieldsRef.current[2] = el)}
// //             className={styles.inputField}
// //             name="message"
// //             value={formData.message}
// //             onChange={handleInputChange}
// //             required
// //           ></textarea>
// //           <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
// //             {isSubmitting ? "Sending..." : "Send Message"}
// //           </button>
// //         </form>


// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;






// // // "use client";



// // // import React, { useEffect, useRef, useState } from "react";
// // // import { gsap } from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import emailjs from "@emailjs/browser";
// // // import "../StyleSheet/Contact.css"; // Import the external CSS file

// // // gsap.registerPlugin(ScrollTrigger);

// // // const Contact = () => {
// // //   const sectionRef = useRef(null);
// // //   const headingRef = useRef(null);
// // //   const contactItemsRef = useRef([]);
// // //   const formFieldsRef = useRef([]);
// // //   const formRef = useRef();
// // //   const [formSent, setFormSent] = useState(false); // State to track if the form is sent

// // //   useEffect(() => {
// // //     // GSAP animation for the section
// // //     gsap.fromTo(
// // //       sectionRef.current,
// // //       { opacity: 0, y: 50 },
// // //       { opacity: 1, y: 0, duration: 1 }
// // //     );

// // //     gsap.fromTo(
// // //       headingRef.current,
// // //       { opacity: 0, x: -100 },
// // //       { opacity: 1, x: 0, duration: 1, delay: 0.3 }
// // //     );

// // //     // Rotate animation for contact items
// // //     contactItemsRef.current.forEach((item, index) => {
// // //       gsap.fromTo(
// // //         item,
// // //         { opacity: 0, rotate: -10, y: 50 },
// // //         {
// // //           opacity: 1,
// // //           rotate: 0,
// // //           y: 0,
// // //           duration: 1,
// // //           delay: index * 0.2,
// // //           scrollTrigger: {
// // //             trigger: item,
// // //             start: "top 80%",
// // //             end: "top 50%",
// // //             scrub: true,
// // //           },
// // //         }
// // //       );
// // //     });

// // //     // Rotate animation for form fields
// // //     formFieldsRef.current.forEach((field, index) => {
// // //       gsap.fromTo(
// // //         field,
// // //         { opacity: 0, rotate: 10, x: 50 },
// // //         {
// // //           opacity: 1,
// // //           rotate: 0,
// // //           x: 0,
// // //           duration: 1,
// // //           delay: index * 0.2,
// // //           scrollTrigger: {
// // //             trigger: field,
// // //             start: "top 90%",
// // //             end: "top 60%",
// // //             scrub: true,
// // //           },
// // //         }
// // //       );
// // //     });
// // //   }, []);



// // //   // const sendEmail = (e) => {
// // //   //   e.preventDefault();




// // //   //   emailjs
// // //   //     .sendForm(
// // //   //       "service_1ml7ra8",  // Your service ID
// // //   //       "template_ha9q7tg",  // Your template ID
// // //   //       formRef.current,     // Form Reference
// // //   //       {
// // //   //         publicKey: "Jx-9b_rSq7FKWAIVH",
// // //   //         from_name: formRef.current["user_name"].value,  // User's name (for from_name in template)
// // //   //         from_email: formRef.current["user_email"].value, // User's email (for from_email in template)
// // //   //         message: formRef.current["message"].value,  // Message content
// // //   //         to_name: "Your Name", // Recipient name (use your own name here)
// // //   //         reply_to: formRef.current["user_email"].value, // Reply-to email
// // //   //       }
// // //   //     )

    

// // //   //     .then(
// // //   //       (response) => {
// // //   //         console.log(response); // Log the response to check the full response
// // //   //         console.log(formRef.current["user_email"].value);

// // //   //         setFormSent(true);
// // //   //         formFieldsRef.current.forEach((field) => (field.value = ""));
// // //   //       },
      
// // //   //       // () => {
// // //   //       //   setFormSent(true); // Set formSent to true
// // //   //       //   formFieldsRef.current.forEach((field) => (field.value = "")); // Clear form fields
// // //   //       // },
// // //   //       (error) => {
// // //   //         console.log("FAILED...", error.text);
// // //   //         setFormSent(false);
// // //   //         alert("Message failed to send. Please try again.");
// // //   //       }
// // //   //     );
// // //   // };







// // //   const inputStyle = {
// // //     backgroundColor: "#2c2c2c", // Dark gray background
// // //     color: "#fff", // White text
// // //     border: "1px solid #444", // Slightly lighter gray border
// // //     padding: "10px",
// // //     borderRadius: "5px",
// // //     // width: "100%",
// // //     marginBottom: "15px",
// // //     fontSize: "16px",
// // //   };

// // //   const buttonStyle = {
// // //     backgroundColor: "#58a6ff",
// // //     color: "#fff",
// // //     border: "none",
// // //     padding: "10px 20px",
// // //     borderRadius: "5px",
// // //     cursor: "pointer",
// // //     fontSize: "16px",
// // //     fontWeight: "bold",
// // //     marginBottom: "35px"
// // //   };

// // //   return (
// // //     <section
// // //       id="contact"
// // //       ref={sectionRef}
// // //       style={{ height: "auto", backgroundColor: "#121212", color: "#fff" }}
// // //       className="contact-section"
// // //     >
// // //       <div className="container">
// // //         <h1 ref={headingRef} className="contact-heading">
// // //           Contact Me
// // //         </h1>
// // //         <p className="contact-text">
// // //           Facing issues with your Google Business Profile? Contact me for quick resolution <br /> and expert optimization to improve your online visibility!</p>




// // //         <div className="contact-grid">
// // //           {["Email", "LinkedIn", "WhatsApp"].map((title, index) => (
// // //             <div
// // //               className="contact-item"
// // //               key={title}
// // //               ref={(el) => (contactItemsRef.current[index] = el)}
// // //             >

// // //               <h2>{title}</h2>
// // //               <p>
// // //                 {title === "Email"
// // //                   ? "rameezahmedbabbar@gmail.com"
// // //                   : title === "LinkedIn"
// // //                     ? "LinkedIn"
// // //                     : "+923310331339 "}
// // //               </p>

// // //               <a
// // //                 href={
// // //                   title === "Email"
// // //                     ? "mailto:rameezahmedbabbar@gmail.com"
// // //                     : title === "LinkedIn"
// // //                       ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
// // //                       : `tel:+923310331339`
// // //                 }
// // //                 target="_blank" // Open the link in a new tab
// // //                 rel="noopener noreferrer" // Security measure when using target="_blank"
// // //               >
// // //                 <button>
// // //                   {title === "Email" ? "Send an Email" : "Send a Message"}
// // //                 </button>
// // //               </a>




// // //               {/* <h2>{title}</h2>
// // //               <p>
// // //                 {title === "Email"
// // //                   ? "rameezahmedbabbar@gmail.com"
// // //                   : title === "LinkedIn"
// // //                   ? "https://www.linkedin.com/in/rameez-babar-a4a7aa53"
// // //                   : "+923310331339 "}
// // //               </p>
// // //               <button>
// // //                 {title === "Email" ? "Send an Email" : "Send a Message"}
// // //               </button> */}
// // //             </div>
// // //           ))}
// // //         </div>









// // //         {/* {/* <form
// // //           ref={formRef}
// // //           className="contact-form"
// // //           onSubmit={sendEmail}
// // //         >
// // //           {["Your Full Name", "Your Email", "Your Message"].map(
// // //             (placeholder, index) => (
// // //               <React.Fragment key={index}>
// // //                 {placeholder === "Your Message" ? (
// // //                   <textarea
// // //                     placeholder={placeholder}
// // //                     ref={(el) => (formFieldsRef.current[index] = el)}
// // //                     style={inputStyle}
// // //                     name="message"
// // //                   ></textarea>
// // //                 ) : (
// // //                   <input
// // //                     type={placeholder === "Your Email" ? "email" : "text"}
// // //                     placeholder={placeholder}
// // //                     ref={(el) => (formFieldsRef.current[index] = el)}
// // //                     style={inputStyle}
// // //                     name={placeholder === "Your Email" ? "user_email" : "user_name"}
// // //                   />
// // //                 )}
// // //               </React.Fragment>
// // //             )
// // //           )}
// // //           <button type="submit" style={buttonStyle}>
// // //             Send Message
// // //           </button>
// // //         </form> */}

 

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Contact;
