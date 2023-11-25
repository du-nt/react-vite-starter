import LoginPage from 'pages/login'
import RegisterPage from 'pages/register'
import { RouteObject } from 'types'

import EmptyLayout from 'components/templates/EmptyLayout'

const guardOnLoggedRoutes: RouteObject[] = [
  {
    path: '',
    layout: EmptyLayout,
    variety: 'guardOnLogged',
    children: [
      {
        name: 'login',
        path: 'login',
        element: <LoginPage />
      },

      {
        name: 'register',
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
]

export default guardOnLoggedRoutes
