import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import NavBar from './routes/NavBar'
import AppRoutes from './routes/AppRoutes'
import Seller from './models/Seller'

function App() {
  const [seller, setSeller] = useState(new Seller("oshi"))

  return (
    <>
      <Router>
        <NavBar />
        <AppRoutes seller={seller} />
      </Router>
    </>
  )
}

export default App
