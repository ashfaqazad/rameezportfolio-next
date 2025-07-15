"use client"; // Required for useState

import { useState } from "react";
import About from "@/components/About";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";
import Projects from "@/components/Projects";
import Service1 from "@/components/Service1";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import HomePage from "@/components/HomePage";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Optional: Add a button to open modal */}
      {/* <button
        onClick={() => setShowModal(true)}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 2000,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Open Modal
      </button> */}

      {/* ✅ Conditional Modal rendering */}
      {showModal && (
        <Modal
          title="Welcome!"
          description="This is a special message or promo or intro."
          onClose={() => setShowModal(false)}
        />
      )}

      {/* All main sections */}
      <HomePage />
      <About />
      {/* <Service1 /> */}
      <Services />
      <Skills />
      <Projects />
      {/* <Card /> */}
      {/* <Contact /> */}
    </>
  );
}






// import About from "@/components/About";
// import Card from "@/components/Card";
// import Contact from "@/components/Contact";
// // import Footer from "@/components/Footer";
// import Modal from "@/components/Modal";
// import Projects from "@/components/Projects";
// import Service1 from "@/components/Service1";
// import Services from "@/components/Services";
// import Skills from "@/components/Skills";
// import HomePage from "@/components/HomePage";


// export default function Home() {
//   return (
//     <>
//       <HomePage />
//       <About />
//       <Service1 />
//       <Services />
//       <Skills />
//       <Projects />
//       <Card />
//       <Modal />
//       <Contact />
//       {/* <Footer /> */}
//     </>
//   );
// }
