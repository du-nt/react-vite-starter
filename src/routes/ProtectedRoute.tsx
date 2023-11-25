import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

export default function ProtectedRoute() {
  const { profile } = useAuth()
  const location = useLocation()

  if (!profile)
    return <Navigate to="/login" state={{ from: location }} replace />

  return <Outlet />
}
