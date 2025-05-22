
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/ResetPassword'
import EmailVerify from './pages/emailVerify'
import ComponentsPage from './pages/ComponentsPage'
import { Toaster } from './components/ui/sonner'
import './App.css'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
