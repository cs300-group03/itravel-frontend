import React from 'react'
import {
  Box,
  InputBase,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  TextField,
} from '@mui/material'
import { LocationOn, AttachMoney } from '@mui/icons-material'

import style from './style'
import { type } from '../../data/service'

const categories = [
  { label: type.ACCOMMODATION },
  { label: type.ATTRACTION },
  { label: type.CAFES },
  { label: type.FLIGHT },
  { label: type.MOTOBIKE },
  { label: type.RESTAURANT },
  { label: type.TRAIN },
]

const FillForm = ({ icon, label }) => {
  return (
    <FormControl fullWidth sx={{ mx: 5, mb: 5 }}>
      <OutlinedInput
        color="secondary"
        startAdornment={
          <InputAdornment position="start">
            {icon()}
            <Box component="span" sx={style.detail}>
              {label}
            </Box>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

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
          <FillForm
            label={'Location'}
            icon={() => <LocationOn sx={style.icon} />}
          />
          <FillForm
            label={'Price'}
            icon={() => <AttachMoney sx={style.icon} />}
          />
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
          <Autocomplete
            options={categories}
            sx={{ mx: 5, mb: 5, width: 400 }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                // sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                color="secondary"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box component="span" sx={style.detail}>
                        Category
                      </Box>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            )}
          />
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
