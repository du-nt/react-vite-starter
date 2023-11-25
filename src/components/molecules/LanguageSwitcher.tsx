import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language'
import { ListItemIcon, ListItemText, Menu } from '@mui/material'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import EnglandFlagIcon from 'components/icons/EnglandFlagIcon'
import JapanFlagIcon from 'components/icons/JapanFlagIcon'

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { t, i18n } = useTranslation()

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangeLanguage = (lang: string) => () => {
    i18n.changeLanguage(lang)
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        color="inherit"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!mr-4"
        startIcon={<LanguageIcon />}
      >
        {t('common.language')}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleChangeLanguage('en')}>
          <ListItemIcon>
            <EnglandFlagIcon className="border rounded-full" />
          </ListItemIcon>
          <ListItemText>{t('common.english')}</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleChangeLanguage('ja')}>
          <ListItemIcon>
            <JapanFlagIcon className="border rounded-full" />
          </ListItemIcon>
          <ListItemText> {t('common.japanese')}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}
