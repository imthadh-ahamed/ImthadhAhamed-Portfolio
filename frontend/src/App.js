import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />

    </div>
  )
}

export default App