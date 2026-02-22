import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import UploadPost from './pages/UploadPost'
import Profile from './pages/Profile'
import Sidebar from './components/Sidebar'

// auth check
const isAuthenticated = () => {
  return !!localStorage.getItem('userId')
}

// protected layout
const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Sidebar />
      {children}
    </>
  )
}

export default function App() {
  return (
    <Routes>

      {/* Default route */}
      <Route
        path="/"
        element={
          isAuthenticated()
            ? <Navigate to="/dashboard" />
            : <Navigate to="/login" />
        }
      />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedLayout>
            <UploadPost />
          </ProtectedLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}
