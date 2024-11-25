import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import React, { useState, useEffect } from "react";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un délai de chargement (par exemple, pour des requêtes API)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 secondes de chargement simulé
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <About />
            <Projects />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
