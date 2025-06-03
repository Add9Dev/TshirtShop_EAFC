<<<<<<< HEAD
import React from 'react';
import Home from './pages/Home/Home';  // adapte le chemin si besoin
import './styles/index.css';  // ton CSS global

function App() {
=======
import React, { useEffect, useState } from "react";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);
    
>>>>>>> origin/dev
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
