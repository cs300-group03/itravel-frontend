import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const CreateServicePage = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField label="Service Name" variant="standard" focused />
      <TextField label="Location" variant="outlined" focused />
      <TextField label="Price" variant="outlined" focused />
      <TextField
        label="Description"
        variant="outlined"
        focused
        multiline
        rows={4}
      />
    </Box>
  )
}

export default CreateServicePage
