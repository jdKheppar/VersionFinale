import React, { useState } from "react";
import "./Home.css";
import Produits from "./components/Produits/Produits";
import Accueil from "./components/Accueil/Accueil";

const Home = ({ produits, accueil }) => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <div className={`container mt-50 content`}>
        <Accueil handleDecouvrir={handleVisible} />
      </div>
      <Produits visible={visible} />
    </div>
  );
};

export default Home;
