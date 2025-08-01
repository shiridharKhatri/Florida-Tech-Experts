
import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

// Public pages
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"

// Protected pages
import ClientDashboard from "./pages/ClientDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import ProjectDetails from "./pages/ProjectDetails"
import AllProjects from "./pages/AllProjects"
import PaymentHistory from "./pages/PaymentHistory"
import Settings from "./pages/Settings"

// Components
import ProtectedRoute from "./components/ProtectedRoute"
import LoadingSpinner from "./components/LoadingSpinner"

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      {/* Auth Routes - Redirect to dashboard if already logged in */}
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
      <Route path="/register" element={user ? <Navigate to="/dashboard" replace /> : <RegisterPage />} />
      <Route path="/forgot-password" element={user ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={<ProtectedRoute>{user?.role === "admin" ? <AdminDashboard /> : <ClientDashboard />}</ProtectedRoute>}
      />

      {/* Projects Routes */}
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <AllProjects />
          </ProtectedRoute>
        }
      />
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>
            <ProjectDetails />
          </ProtectedRoute>
        }
      />

      {/* Other Protected Routes */}
      <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <PaymentHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
