import React, { useState } from "react";

import Navbar from './components/Navbar'
import Header from './components/Header'
import Api from './components/Api'
import LinkResult from './components/LinkResult'
import Features from './components/Features'
import Boost from './components/Boost'
import Footer from './components/Footer'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="font-psans ">
      <Navbar />
      <Header />
      <Api setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
      <Features />
      <Boost />
      <Footer />

    </div>
  );
}

export default App;
