import React from "react";

const ScrollStickySection = ({ children, bgColor }) => {
  return (
    <section
      style={{
        backgroundColor: bgColor || "white", // Couleur de fond optionnelle
        height: "100vh", // Pleine hauteur
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky", // Section reste collée
        top: 0, // Point de collage
        zIndex: 1, // Gérer la superposition
      }}
    >
      {children}
    </section>
  );
};

export default ScrollStickySection;