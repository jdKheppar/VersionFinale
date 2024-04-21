import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ProduitFavorisContext from "./contexts/produitFavorisContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const [favProducts, setfavProducts] = useState([]);
  const [page, setPage] = useState("home");
  // Si l'item est dans la liste on l'enlève
  // Sinon on l'ajoute
  const handleAjusterProduitFavoris = (item) => {
    let result = favProducts.filter((t) => t._id === item._id);
    if (result.length > 0)
      setfavProducts(favProducts.filter((t) => t._id !== item._id));
    else setfavProducts([...favProducts, item]);
  };

  return (
    <div className={`app_container d-flex flex-column`}>
      <ProduitFavorisContext.Provider
        value={{ data: favProducts, setData: handleAjusterProduitFavoris }}
      >
        <Header setfavProducts={setfavProducts} setPage={setPage} />
        <Banner />

        <Outlet />
      </ProduitFavorisContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
