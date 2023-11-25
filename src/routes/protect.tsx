import ExplorePage from 'pages/explore'
import HistoryPage from 'pages/history'
import LibraryPage from 'pages/library'
import MusicPage from 'pages/music'
import ProfilePage from 'pages/profile'
import { RouteObject } from 'types'

const protectRoutes: RouteObject[] = [
  {
    path: '',
    children: [
      {
        name: 'profile',
        path: 'profile',
        element: <ProfilePage />
      },
      {
        name: 'explore',
        path: 'explore',
        element: <ExplorePage />
      },
      {
        name: 'library',
        path: 'library',
        element: <LibraryPage />
      },
      {
        name: 'history',
        path: 'history',
        element: <HistoryPage />
      },
      {
        name: 'music',
        path: 'music',
        element: <MusicPage />
      }
    ]
  }
]

export default protectRoutes
