import React from 'react'
import { Box, IconButton, Link } from '@mui/material'
import style from './style'
import { type, getIcon } from '../../data/service'
import { MoreHoriz, Place, AttachMoney } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  let _icon = getIcon({ serviceType: service.type, m: 5, s: 36 })
  return (
    <Box sx={style.container}>
      <Box component="img" sx={style.image} src={service.img[0]} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <Box sx={style.textContainer}>
          <Link
            underline="hover"
            color="secondary"
            sx={style.title}
          >
            {service.name}
          </Link>
          <Box sx={style.descriptionContainer}>
            <Place sx={style.icon} />
            <Box component="span" sx={style.description}>
              Location: {service.location.name}
            </Box>
          </Box>
          <Box sx={style.descriptionContainer}>
            <AttachMoney sx={style.icon} />
            <Box component="span" sx={style.description}>
              Price: {service.price}$
            </Box>
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
          {_icon}
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCard
