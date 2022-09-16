import React from "react";

import Navbar from './components/Navbar'
import Header from './components/Header'
import Api from './components/Api'
import Features from './components/Features'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-psans ">
      <Navbar />
      <Header />
      <Api />
      <Features />
      <Boost />
      <Footer />

    </div>
  );
}

export default App;
