import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import Const from 'constants/common'
import useSidebar from 'hooks/useSidebar'
import cn from 'libs/cn'

type Props = {
  isCollapsed: boolean
}

export default function SidebarMenu({ isCollapsed }: Props) {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const { handleCloseTemporaryDrawer } = useSidebar()

  return (
    <Box sx={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <List>
        {Const.PRIMARY_SIDEBAR_MENU.map(
          ({
            title,
            path,
            activeIcon: ActiveIcon,
            inactiveIcon: InactiveIcon
          }) => {
            const isSelected = pathname === path

            return (
              <ListItem key={title} disablePadding className="px-2">
                <ListItemButton
                  to={path}
                  component={NavLink}
                  selected={isSelected}
                  onClick={handleCloseTemporaryDrawer}
                  className={cn({
                    'flex-col !px-0 !py-3': isCollapsed
                  })}
                >
                  <ListItemIcon className={cn({ '!min-w-fit': isCollapsed })}>
                    {isSelected ? <ActiveIcon /> : <InactiveIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={t(title)}
                    className={cn({ 'max-w-full': isCollapsed })}
                    primaryTypographyProps={{
                      className: cn('truncate', {
                        '!text-xs': isCollapsed
                      })
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          }
        )}
      </List>

      {!isCollapsed && (
        <>
          <Divider />
          <List>
            {Const.SECONDARY_SIDEBAR_MENU.map(
              ({
                title,
                path,
                activeIcon: ActiveIcon,
                inactiveIcon: InactiveIcon
              }) => {
                const isSelected = pathname === path

                return (
                  <ListItem key={title} disablePadding className="px-2">
                    <ListItemButton
                      to={path}
                      component={NavLink}
                      selected={isSelected}
                      onClick={handleCloseTemporaryDrawer}
                    >
                      <ListItemIcon>
                        {isSelected ? <ActiveIcon /> : <InactiveIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={t(title)}
                        primaryTypographyProps={{
                          className: 'truncate'
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              }
            )}
          </List>
        </>
      )}
    </Box>
  )
}
