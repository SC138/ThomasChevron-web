import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({ children, bgColor }) => {
  const ref = useRef(null); // Référence à l'élément pour le suivi
  const isInView = useInView(ref, { once: true }); // Déclenchement une fois visible

  return (
    <motion.section
      ref={ref}
      style={{
        backgroundColor: bgColor || "white", // Couleur de fond optionnelle
        height: "100vh", // Chaque section occupe toute la hauteur
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Pour un contrôle précis
      }}
      initial={{ opacity: 0, scale: 0.95 }} // Départ invisible et légèrement réduit
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      } // Animation quand visible
      transition={{ duration: 1 }} // Durée de l'animation
    >
      {children}
    </motion.section>
  );
};

export default Section;
