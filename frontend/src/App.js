import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Experience />

    </div>
  )
}

export default App