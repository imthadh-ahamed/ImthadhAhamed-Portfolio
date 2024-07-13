import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Licences from "./components/Licences";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Licences />
      <p className="thanks-message">Thanks for scrolling...</p>
      <div class="loader">
        <div class="justify-content-center jimu-primary-loading"></div>
      </div>
    </div>
  );
}

export default App