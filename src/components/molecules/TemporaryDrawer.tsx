import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Const from 'constants/common'
import useSidebar from 'hooks/useSidebar'

import SidebarMenu from 'components/atoms/SidebarMenu'

export default function TemporaryDrawer() {
  const { isTemporaryDrawerCollapse, handleToggleTemporaryDrawer } =
    useSidebar()

  return (
    <Drawer
      variant="temporary"
      onClose={handleToggleTemporaryDrawer}
      open={!isTemporaryDrawerCollapse}
      ModalProps={{ keepMounted: true }}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        display: { xs: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: Const.DRAWER_WIDTH
        }
      }}
    >
      <AppBar
        component="nav"
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            onClick={handleToggleTemporaryDrawer}
            size="large"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>

      <SidebarMenu isCollapsed={false} />
    </Drawer>
  )
}
