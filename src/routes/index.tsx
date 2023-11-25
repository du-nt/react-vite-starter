import { Route, Routes as Switch } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import NotFound from 'pages/NotFound'
import { RouteObject } from 'types'

import DefaultLayout from 'components/templates/DefaultLayout'

import guardOnLoggedRoutes from './guardOnLogged'
import protectRoutes from './protect'
import ProtectedRoute from './ProtectedRoute'
import publicRoutes from './public'
import PublicRoute from './PublicRoute'
import RedirectHomeRoute from './RedirectHomeRoute'

const routes: RouteObject[] = [
  ...guardOnLoggedRoutes,
  ...publicRoutes,
  ...protectRoutes
]

export default function Routes() {
  const { profile } = useAuth()

  return (
    <Switch>
      {routes.map(
        ({
          path,
          children,
          layout: RootLayout = DefaultLayout,
          variety = 'protect'
        }) => {
          let wrapperElement = <ProtectedRoute />

          switch (variety) {
            case 'guardOnLogged':
              wrapperElement = <RedirectHomeRoute />
              break

            case 'public':
              wrapperElement = <PublicRoute />
              break

            default:
              wrapperElement = <ProtectedRoute />
              break
          }

          return (
            <Route key={path} path={path} element={wrapperElement}>
              {children.map(
                ({ role, index, path, element, layout: NestedLayout }) => {
                  const Layout = NestedLayout || RootLayout

                  return (
                    (!role ||
                      !profile ||
                      !profile.role ||
                      role.includes(profile.role)) && (
                      <Route
                        key={path}
                        path={path}
                        index={index}
                        element={<Layout>{element}</Layout>}
                      />
                    )
                  )
                }
              )}
            </Route>
          )
        }
      )}

      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}
