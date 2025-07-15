"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import Modal from "./Modal";
import styles from "../StyleSheet/Services.module.css";

const Services = () => {
  const [selectedCard, setSelectedCard] = useState(null); // Modal state
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const cardData = [
    {
      title: (
        <>
          Verification <br /> Services
        </>
      ),
      description:
        "I provide comprehensive verification services for Google Business Profiles, ensuring your business is successfully verified and visible on search and maps. My services include guiding you through the verification process, addressing any challenges, and resolving issues to establish a strong and authentic online presence.",
      icon: "✔️", // Verification
    },
    {
      title: (
        <>
          Reinstatement <br /> Services
        </>
      ),
      description:
        "I provide professional reinstatement services for suspended Google Business Profiles. With expertise in identifying and resolving issues, I work to restore your profile while maintaining compliance with Google’s guidelines, helping your business go live again.",
      icon: "🔄", // Reinstatement
    },
    {
      title: (
        <>
          Improve Local <br /> Rankings
        </>
      ),
      description:
        "I specialize in improving local rankings for businesses by optimizing Google Business Profiles, implementing effective local SEO strategies, and improving online visibility. My services will make your business appear prominently in local searches, attracting more customers, outranking your competitors, and driving growth.",
      icon: "📈", // Rankings improvement
    },
  ];

  const handleReadMore = (index) => setSelectedCard(index); // Open modal
  const closeModal = () => setSelectedCard(null); // Close modal

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
      style={{ height: "auto", backgroundColor: "#121212", color: "#fff" }}
      className={styles.servicesSection}
    >
      <div className="container">
        <h1 ref={headingRef} className={styles.servicesHeading}>
          Services
        </h1>
        <p className={styles.servicesSubheading}>
          I offer expert Google Business Profile services, including verification, reinstatement, optimization, and local SEO to boost your online presence.
        </p>

        <div className={styles.servicesCardsGrid}>
          {cardData.map((card, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <Card
                title={card.title}
                description={`${card.description.slice(0, 100)}...`} // Truncate description
                buttonLabel="Read More"
                icon={card.icon}
                onClick={() => handleReadMore(index)}
              />
            </div>
          ))}
        </div>

        {selectedCard !== null && (
          <Modal
            title={cardData[selectedCard].title}
            description={cardData[selectedCard].description}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
