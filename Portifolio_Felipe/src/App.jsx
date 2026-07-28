
import './App.css'
import Info from './pages/Info.jsx'
import Nav from './pages/Nav.jsx'
import Sobre from './pages/Sobre.jsx'
import Footer  from './pages/Footer.jsx'

import Project from './pages/Project';





function App() {
  return (
    <div className="app">
      <Nav />
      <Sobre/>
      <Info/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
