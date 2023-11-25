import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Link, TextField, TextFieldProps, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { useQuery } from '@tanstack/react-query'
import { Dayjs } from 'dayjs'

import ViteIcon from 'components/icons/ViteIcon'

export default function HomePage() {
  const [datePickerValue, setDatePickerValue] = useState<Dayjs | null>(null)
  const [timePickerValue, setTimePickerValue] = useState<Dayjs | null>(null)

  const { t } = useTranslation()

  useQuery(['api/v1/events?limit=2&offset=0'])

  const datePickerTextField = (params: TextFieldProps) => (
    <TextField
      {...params}
      inputProps={{
        ...params.inputProps,
        placeholder: t('common.datePickerPlaceholder')
      }}
    />
  )

  const timePickerTextField = (params: TextFieldProps) => (
    <TextField
      {...params}
      inputProps={{
        ...params.inputProps,
        placeholder: t('common.datePickerPlaceholder')
      }}
    />
  )

  return (
    <div className="border shadow-xl border-gray-50 rounded-xl">
      <main>
        <Typography variant="h4" className="text-red-500 text-center">
          Hello Vite + React
        </Typography>

        <nav className="flex items-center gap-4 text-center my-4">
          <Link to="/" component={NavLink}>
            Homepage
          </Link>

          <Link to="/about" component={NavLink}>
            About
          </Link>

          <Link to="/login" component={NavLink}>
            Login
          </Link>

          <Link to="/profile" component={NavLink}>
            Profile(protected)
          </Link>
        </nav>

        <div className="flex gap-3">
          <img src="/vite.svg" alt="logo" />
          <div className="h-10 w-10 bg-[url('/vite.svg')] bg-center bg-no-repeat" />
          <ViteIcon />
        </div>

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
        </Box>

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
        </Box>

        <Stack spacing={3} className="my-4">
          <Stack spacing={3} className="my-4">
            <DatePicker
              value={datePickerValue}
              onChange={(newValue) => setDatePickerValue(newValue)}
              slots={{
                textField: datePickerTextField
              }}
            />
            <TimePicker
              value={timePickerValue}
              onChange={(newValue) => setTimePickerValue(newValue)}
              slots={{
                textField: timePickerTextField
              }}
            />
          </Stack>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </main>
    </div>
  )
}
