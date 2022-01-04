import React from 'react'
import {
  Box,
  InputBase,
  Button,
  TextField,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import FilledInput from '@mui/material/FilledInput'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Visibility from '@mui/icons-material/Visibility'
import { LocationOn, AttachMoney } from '@mui/icons-material'

import style from './style'

const CreateServicePage = () => {
  return (
    <Box sx={style.container} component="form" noValidate autoComplete="off">
      <InputBase
        sx={style.title}
        placeholder="Enter Service Name"
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Box
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', m: 5 }}>
          <FormControl fullWidth sx={{ mx: 5, mb: 5 }}>
            <OutlinedInput
              color="secondary"
              startAdornment={
                <InputAdornment position="start">
                  <LocationOn
                    sx={{
                      color: 'secondary.main',
                      fontSize: 24,
                      marginRight: 3,
                    }}
                  />
                  <Box component="span" sx={style.detail}>
                    Location
                  </Box>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ mx: 5, mb: 5 }}>
            <OutlinedInput
              color="secondary"
              startAdornment={
                <InputAdornment position="start">
                  <AttachMoney
                    sx={{
                      color: 'secondary.main',
                      fontSize: 24,
                      marginRight: 3,
                    }}
                  />
                  <Box component="span" sx={style.detail}>
                    Price
                  </Box>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth sx={{ mx: 5, mb: 5 }}>
            <OutlinedInput
              color="secondary"
              startAdornment={
                <InputAdornment position="start">
                  <Box component="span" sx={style.detail}>
                    Description
                  </Box>
                </InputAdornment>
              }
              multiline
              rows={4}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', m: 5 }}>
          <FormControl fullWidth sx={{ mx: 5, mb: 5 }}>
            <OutlinedInput
              color="secondary"
              startAdornment={
                <InputAdornment position="start">
                  <Box component="span" sx={style.detail}>
                    Category
                  </Box>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            fontFamily: 'Poppins',
            textTransform: 'none',
            color: '#ffffff',
            borderRadius: 15,
            paddingX: 20,
          }}
        >
          Go Public!
        </Button>
      </Box>
    </Box>
  )
}

export default CreateServicePage
