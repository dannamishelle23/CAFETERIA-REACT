import React from "react";
import Header from "./components/Header";
import SectionCoffee from "./components/SectionCoffee";
import SectionVideo from "./components/SectionVideo";
import SectionShop from "./components/SectionShop";
import DescargaApp from "./components/DescargaApp";
import Footer from "./components/Footer";
import "./styles/estilo-home.css";

function App() {
  return (
    <>
      <Header />
      <SectionCoffee />
      <SectionVideo />
      <SectionShop />
      <DescargaApp />
      <Footer />
    </>
  );
}

export default App;
