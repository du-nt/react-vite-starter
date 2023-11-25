import { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import useAuth from 'hooks/useAuth'
import useSidebar from 'hooks/useSidebar'
import { useRecoilState } from 'recoil'
import themeState from 'stores/theme'

import ThemeSwitch from 'components/atoms/ThemeSwitch'
import LanguageSwitcher from 'components/molecules/LanguageSwitcher'
import MobileMenu from 'components/molecules/MobileMenu'

export default function Header() {
  const [theme, setTheme] = useRecoilState(themeState)
  const { profile, logout } = useAuth()
  const {
    tabletMatched,
    tabletOnlyMatched,
    handleTogglePermanentDrawer,
    handleToggleTemporaryDrawer
  } = useSidebar()

  const handleToggleDrawer = () => {
    if (tabletOnlyMatched) {
      handleToggleTemporaryDrawer()
      return
    }

    handleTogglePermanentDrawer()
  }

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    const newTheme = checked ? 'dark' : 'light'

    setTheme(newTheme)
  }

  const handleLogout = () => {
    if (!profile) return
    logout()
  }

  return (
    <Toolbar className="!px-3 tablet:!px-6">
      {tabletMatched && (
        <IconButton
          onClick={handleToggleDrawer}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        MUI
      </Typography>

      <Box className="flex items-center">
        <LanguageSwitcher />

        <FormControlLabel
          className="select-none"
          control={
            <ThemeSwitch
              checked={theme === 'dark'}
              onChange={handleChangeTheme}
            />
          }
          label="Mode"
        />

        {tabletMatched ? (
          <>
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' }
            ].map(({ label, href }) => (
              <Button
                key={label}
                component={NavLink}
                to={href}
                sx={{ color: '#fff' }}
              >
                {label}
              </Button>
            ))}

            <Button
              component={profile ? 'div' : NavLink}
              to={profile ? undefined : '/login'}
              sx={{ color: '#fff' }}
              onClick={handleLogout}
            >
              {profile ? 'Logout' : 'Login'}
            </Button>
          </>
        ) : (
          <MobileMenu />
        )}
      </Box>
    </Toolbar>
  )
}
