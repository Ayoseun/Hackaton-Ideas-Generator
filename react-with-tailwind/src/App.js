import React from 'react'
import { NavBar } from './pages/navbar'
import { Home } from './pages/home'

function App() {
  return (
    <div
      className="flex flex-col w-full h-screen bg-contain bg-center"
      style={{ backgroundImage: "url('bg.jpeg')" }}
    >
      <NavBar />
      <Home />
    </div>
  )
}

export default App
