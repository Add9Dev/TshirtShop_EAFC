import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import "./styles/main.css"; // pour height 100%

function App() {
  return (
      <div className="app-container">
        <Home />
        <Footer />
      </div>
  );
}

export default App;
