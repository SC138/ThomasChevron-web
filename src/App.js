import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import AboutPage from "./components/AboutPage/AboutPage";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";
import Contact from "./components/Contact/Contact";
import { useState, useEffect } from "react";

function AppWrapper({ setIsLoading }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact" || location.pathname === "/aboutpage") {
      document.body.style.overflow = "hidden"; // Désactiver le scroll
    } else {
      document.body.style.overflow = "auto"; // Activer le scroll
    }
  }, [location]);

  return (
    <>
      <Header setIsLoading={setIsLoading} />
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <AppWrapper setIsLoading={setIsLoading} />
        </Router>
      )}
    </div>
  );
}

export default App;