// import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import ThemeEditor from './pages/themeEditor'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/themeEditor' element={<ThemeEditor />} />
    </Routes>
  )
}

export default App
