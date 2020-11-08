import React from 'react'

import { NavBar } from './components/Navbar/navbar'
import { Menu } from './components/Menu/menu'

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Menu />
    </div>
  </div>
)

export default App
