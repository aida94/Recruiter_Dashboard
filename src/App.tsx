import React from 'react'

import './App.css'
import { NavBar } from './components/Navbar/navbar'
import { Menu } from './components/Menu/menu'

const App = () => (
  <div className="App">
    <NavBar />
    <div className="container">
      <Menu />
    </div>
  </div>
)

export default App
