
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock users database
  const mockUsers = [
    {
      id: 1,
      email: "client@example.com",
      password: "password123",
      name: "Testing",
      role: "client",
      company: "Tech Startup Inc",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      email: "admin@floridatechexperts.com",
      password: "admin123",
      name: "Testing Admin",
      role: "admin",
      company: "Florida Tech Experts",
      joinDate: "2023-06-01",
    },
  ]

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkAuthState = () => {
      try {
        const savedUser = localStorage.getItem("florida_tech_user")
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser)
          setUser(parsedUser)
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error)
        localStorage.removeItem("florida_tech_user")
      } finally {
        setLoading(false)
      }
    }

    checkAuthState()
  }, [])

  const login = async (email, password) => {
    try {
      // Mock login - in real app, this would be an API call
      const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        localStorage.setItem("florida_tech_user", JSON.stringify(userWithoutPassword))
        return { success: true }
      } else {
        return { success: false, error: "Invalid email or password" }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "An error occurred during login" }
    }
  }

  const register = async (userData) => {
    try {
      // Mock registration - in real app, this would be an API call
      const newUser = {
        id: Date.now(),
        ...userData,
        role: "client",
        joinDate: new Date().toISOString().split("T")[0],
      }

      const { password: _, ...userWithoutPassword } = newUser
      setUser(userWithoutPassword)
      localStorage.setItem("florida_tech_user", JSON.stringify(userWithoutPassword))
      return { success: true }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, error: "An error occurred during registration" }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("florida_tech_user")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
