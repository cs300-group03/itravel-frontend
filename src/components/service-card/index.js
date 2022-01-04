import React from 'react'
import { Box, IconButton } from '@mui/material'
import style from './style'
import { MoreHoriz, Bed } from '@mui/icons-material'
import { Dropdown } from 'bootstrap'

const ServiceCard = ({ service }) => {
  return (
    <Box sx={style.container}>
      <Box component="img" sx={style.image} src={service.image[0]} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <Box sx={style.textContainer}>
          <Box component="span" sx={style.title}>
            {service.name}
          </Box>
          <Box component="span" sx={style.description}>
            Location: {service.location.address} - {service.location.province} -{' '}
            {service.location.country}
          </Box>
          <Box component="span" sx={style.description}>
            Price: {service.price.from}$ - {service.price.to}$/
            {service.price.unit}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            aria-label="more"
            sx={{ alignSelf: 'flex-start', margin: 5 }}
          >
            <MoreHoriz />
          </IconButton>
          <Bed sx={{ margin: 5, fontSize: 36 }} />
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCard
