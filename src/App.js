import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import AboutPage from "./components/AboutPage/AboutPage";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loader actif par défaut

  // Gestion du premier chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Désactiver le loader après 3 secondes
    }, 3000);

    return () => clearTimeout(timer); // Nettoyer le timeout
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Header setIsLoading={setIsLoading} /> {/* On passe la gestion du loader à Header */}
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <About />
                    <Projects />
                  </>
                }
              />
              <Route path="/aboutpage" element={<AboutPage />} />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
}

export default App;
