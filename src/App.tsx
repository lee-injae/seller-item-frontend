import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import NavBar from './routes/NavBar'
import AppRoutes from './routes/AppRoutes'
import Seller from './models/Seller'
import LoginComponent from './components/LoginComponent'

function App() {
  const [seller, setSeller] = useState(new Seller("oshi", "ADMIN"))

  return (
    <>
      <Router>
        <NavBar />
        <LoginComponent />
      </Router>
    </>
  )
}

export default App
