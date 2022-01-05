import React from 'react'
import {
  Box,
  Avatar,
  InputBase,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  TextField,
  Rating,
} from '@mui/material'
import {
  Bed,
  Place,
  Attractions,
  LocalCafe,
  Restaurant,
  Flight,
  TwoWheeler,
  Train,
  LocationOn,
  AttachMoney,
} from '@mui/icons-material'
import style from './style'
import { type, getIcon } from '../../data/service'

const ServiceInfoPage = ({ service }) => {
  let _icon = getIcon({
    serviceType: service.type,
    m: 1,
    s: 36,
    c: 'secondary.main',
  })
  const img = service.images.map((image) => (
    <Box component="img" sx={style.image} src={image} />
  ))
  return (
    <Box sx={style.container}>
      <Box component="span" sx={style.title}>
        {service.name}
      </Box>

      <Box sx={style.headerContainer}>
        <Box sx={style.avatarContainer}>
          <Avatar src={service.owner.avatar} />
          <Box component="span" sx={{ ml: 5, alignSelf: 'center' }}>
            {service.owner.name}
          </Box>
        </Box>
        <Box>
          <Rating
            name="read-only"
            value={service.rating}
            size="large"
            readOnly
          />
        </Box>
      </Box>

      <Box sx={style.imageContainer}>{img}</Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', my: 20, mx: 30 }}>
        <Box sx={{ mx: 10, flex: 1 }}>
          <Box sx={style.avatarContainer}>
            {_icon}
            <Box
              component="span"
              sx={{ ml: 1, alignSelf: 'center', fontSize: 24 }}
            >
              {service.type}
            </Box>
          </Box>
          <Box sx={style.avatarContainer}>
            <LocationOn sx={{ m: 1, fontSize: 36, color: 'secondary.main' }} />
            <Box
              component="span"
              sx={{ ml: 1, fontSize: 24, alignSelf: 'center' }}
            >
              {service.location.province}
            </Box>
          </Box>
          <Box sx={style.avatarContainer}>
            <AttachMoney sx={{ m: 1, fontSize: 36, color: 'secondary.main' }} />
            <Box
              component="span"
              sx={{ ml: 1, fontSize: 24, alignSelf: 'center' }}
            >
              {service.price.from}$ - {service.price.to}$/{service.price.unit}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mx: 10, flex: 4 }}>
          <Box
            component="span"
            sx={{
              fontWeight: '600',
              fontSize: 36,
              color: 'secondary.main',
            }}
          >
            Description
          </Box>
          <Box
            sx={{
              fontWeight: 'light',
              fontSize: 24,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tellus lectus, tincidunt vitae felis varius, dignissim rutrum dui.
            Nunc massa magna, accumsan ut turpis id, laoreet ultrices odio.{' '}
          </Box>
        </Box>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Button
          variant="contained"
          sx={{
            fontFamily: 'Poppins',
            fontSize: 36,
            textTransform: 'none',
            color: '#ffffff',
            borderRadius: 15,
            paddingX: 20,
          }}
        >
          Book Now!
        </Button>
      </Box>
    </Box>
  )
}

export default ServiceInfoPage
