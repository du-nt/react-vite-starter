import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

export default function RedirectHomeRoute() {
  const { profile } = useAuth()
  const { state } = useLocation()

  const path = state?.from?.pathname || '/'

  if (profile) return <Navigate to={path} replace />

  return <Outlet />
}
