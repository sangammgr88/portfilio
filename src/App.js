import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-pink-300'>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App