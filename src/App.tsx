import { useTranslation } from 'react-i18next'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import useAuth from 'hooks/useAuth'
import { SnackbarKey, SnackbarProvider } from 'notistack'
import { useRecoilValue } from 'recoil'
import themeState from 'stores/theme'

import SnackbarCloseButton from 'components/atoms/SnackbarCloseButton'
import Spinner from 'components/atoms/Spinner'

import 'dayjs/locale/ja'

import { darkTheme, lightTheme } from './libs/theme'
import Routes from './routes'

export default function App() {
  const { i18n } = useTranslation()
  const { isInitialLoading } = useAuth({ enabled: true })
  const theme = useRecoilValue(themeState)

  const snackbarAction = (snackbarKey: SnackbarKey) => (
    <SnackbarCloseButton snackbarKey={snackbarKey} />
  )

  if (isInitialLoading) return <Spinner />

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top'
        }}
        autoHideDuration={3000}
        disableWindowBlurListener
        preventDuplicate
        action={snackbarAction}
      >
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={i18n.language}
        >
          <Routes />
        </LocalizationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
