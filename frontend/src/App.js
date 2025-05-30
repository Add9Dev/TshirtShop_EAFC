import React, { useEffect, useState } from "react";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div className="home">

      <h2>Catégories disponibles</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}

      </ul>
    </div>
  );
}

export default Home;
