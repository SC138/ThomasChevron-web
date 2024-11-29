import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import ScrollStickySection from "./components/ScrollStickySection/ScrollStickySection";

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
          <Header setIsLoading={setIsLoading} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Bannière */}
                    <ScrollStickySection bgColor="#000">
                      <Banner />
                    </ScrollStickySection>

                    {/* À propos */}
                    <ScrollStickySection bgColor="#f8f9fa">
                      <About />
                    </ScrollStickySection>

                    {/* Projets */}
                    <ScrollStickySection bgColor="#fff">
                      <Projects />
                    </ScrollStickySection>
                  </>
                }
              />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
}

export default App;