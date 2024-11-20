import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import React from "react";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
