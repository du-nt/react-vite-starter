import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import HistoryIcon from '@mui/icons-material/History'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import en from 'locales/en'
import ja from 'locales/ja'

class Const {
  static get DRAWER_WIDTH() {
    return 240
  }

  static get MINI_DRAWER_WIDTH() {
    return 72
  }

  static get PRIMARY_SIDEBAR_MENU() {
    return [
      {
        path: '/',
        title: 'common.sidebar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/library',
        title: 'common.sidebar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get SECONDARY_SIDEBAR_MENU() {
    return [
      {
        path: '/history',
        title: 'common.sidebar.history',
        inactiveIcon: HistoryOutlinedIcon,
        activeIcon: HistoryIcon
      },
      {
        path: '/music',
        title: 'common.sidebar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      }
    ]
  }

  static get NAVIGATION_BAR_ITEMS() {
    return [
      {
        path: '/',
        title: 'common.navigationBar.home',
        inactiveIcon: HomeOutlinedIcon,
        activeIcon: HomeIcon
      },
      {
        path: '/explore',
        title: 'common.navigationBar.explore',
        inactiveIcon: RocketLaunchOutlinedIcon,
        activeIcon: RocketLaunchIcon
      },
      {
        path: '/music',
        title: 'common.navigationBar.music',
        inactiveIcon: HeadsetMicOutlinedIcon,
        activeIcon: HeadsetMicIcon
      },
      {
        path: '/library',
        title: 'common.navigationBar.library',
        inactiveIcon: VideoLibraryOutlinedIcon,
        activeIcon: VideoLibraryIcon
      }
    ]
  }

  static get DEFAULT_LOCALE() {
    return 'ja'
  }

  static get TRANSLATIONS_OBJ() {
    return { en, ja }
  }
}

export default Const
