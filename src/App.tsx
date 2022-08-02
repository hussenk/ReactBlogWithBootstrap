import React from "react";

import "./App.css";
import Container from "./components/Container.component";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";
import Navbar from "./components/Navbar.component";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
