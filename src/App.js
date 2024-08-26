import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App