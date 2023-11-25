import { SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import { AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material'
import Const from 'constants/common'

export default function BottomNavigationBar() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const [value, setValue] = useState(pathname)

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <AppBar
      component="nav"
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, top: 'unset' }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        {Const.NAVIGATION_BAR_ITEMS.map(
          ({
            path,
            title,
            activeIcon: ActiveIcon,
            inactiveIcon: InactiveIcon
          }) => (
            <BottomNavigationAction
              key={path}
              value={path}
              to={path}
              component={NavLink}
              label={t(title)}
              icon={pathname === path ? <ActiveIcon /> : <InactiveIcon />}
              sx={{
                maxWidth: 'unset',
                '& .MuiBottomNavigationAction-label': {
                  transition: 'none',
                  '&.Mui-selected': {
                    fontSize: '0.75rem'
                  }
                }
              }}
            />
          )
        )}
      </BottomNavigation>
    </AppBar>
  )
}
