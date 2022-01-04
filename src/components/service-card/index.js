import React from 'react'
import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import style from './style'

const ServiceCard = ({ service }) => {
  return (
    <Box sx={style.container}>
      <Box component="img" sx={style.image} src={service.image[0]} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={style.title}>
          {service.name}
        </Box>
        <Box component="span" sx={style.description}>
          Location: {service.location.address} - {service.location.province} -{' '}
          {service.location.country}
        </Box>
        <Box component="span" sx={style.description} >
          Price: {service.price.from}$ - {service.price.to}$/
          {service.price.unit}
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCard
