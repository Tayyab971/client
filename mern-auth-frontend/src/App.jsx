
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ResetPasswordPage from './pages/ResetPassword'
import EmailVerify from './pages/EmailVerficationPage'
import ComponentsPage from './pages/ComponentsPage'
import { Toaster } from './components/ui/sonner'
import AgGridReactExample from './pages/AgGrid'
import { ModuleRegistry, AllCommunityModule, ValidationModule } from 'ag-grid-community';
import './App.css'

ModuleRegistry.registerModules([AllCommunityModule, ValidationModule]);


const App = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/ag-grid" element={<AgGridReactExample />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
