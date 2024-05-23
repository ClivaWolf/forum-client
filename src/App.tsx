// import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import ThemeEditor from './pages/themeEditor'
import { ConfigProvider, notification } from 'antd'
import UserProfile from './pages/dashboard/userProfile'

function App() {
  const [api, contextHolder] = notification.useNotification();

  return (
    <ConfigProvider>
      {contextHolder}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/themeEditor' element={<ThemeEditor />} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
    </ConfigProvider>
  )
}

export default App
