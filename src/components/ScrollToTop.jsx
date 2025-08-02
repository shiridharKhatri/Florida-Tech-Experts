// components/ScrollToTop.js
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTopLayout = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}

export default ScrollToTopLayout
