import AboutPage from 'pages/about'
import HomePage from 'pages/home'
import { RouteObject } from 'types'

const publicRoutes: RouteObject[] = [
  {
    path: '',
    variety: 'public',
    children: [
      {
        name: 'home',
        path: '',
        index: true,
        element: <HomePage />
      },
      {
        name: 'about',
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
]

export default publicRoutes
