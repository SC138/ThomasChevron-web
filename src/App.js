import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import AboutPage from "./components/AboutPage/AboutPage";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";

// Sous-composant pour encapsuler les routes et gérer les comportements liés à l'URL
function AppWrapper({ setIsLoading }) {
  const location = useLocation(); // Hook pour obtenir la localisation actuelle (URL)

  useEffect(() => {
    // Gérer le scroll en fonction de la route
    const updateOverflow = () => {
      if (["/aboutpage", "/contact"].includes(location.pathname)) {
        document.body.style.overflow = "auto"; // Autoriser le scroll pour certaines pages
      } else {
        document.body.style.overflow = "auto"; // Comportement par défaut
      }
    };

    updateOverflow(); // Applique immédiatement les réglages au chargement de la route

    return () => {
      document.body.style.overflow = "auto"; // Réinitialise l'overflow à la sortie du composant
    };
  }, [location]); // Réexécute l'effet à chaque changement d'URL

  return (
    <>
      {/* Barre de navigation */}
      <Header setIsLoading={setIsLoading} />
      <main>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <About /> {/* Section "À propos" de la page d'accueil */}
                <Projects /> {/* Section "Projets" de la page d'accueil */}
              </>
            }
          />
          {/* Route pour la page détaillée "À propos" */}
          <Route path="/aboutpage" element={<AboutPage />} />
          {/* Route pour la page "Contact" */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

// Composant principal de l'application
function App() {
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement initial

  useEffect(() => {
    // Simule un délai de chargement (ex. pour un appel API)
    const timer = setTimeout(() => {
      setIsLoading(false); // Désactive le loader après 1 seconde
    }, 1000);

    return () => clearTimeout(timer); // Nettoie le timer lorsque le composant est démonté
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        // Affiche le loader pendant le chargement initial
        <Loader />
      ) : (
        // Affiche l'application principale une fois chargée
        <Router>
          <AppWrapper setIsLoading={setIsLoading} />
        </Router>
      )}
    </div>
  );
}

export default App;
