import React from 'react'
import { Box, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import ServiceCard from '../../../components/service-card'
import style from './style'
import { Link } from 'react-router-dom'

const ServiceProviderProfilePage = ({ user }) => {
  const serviceList = user.services.map((service) => (
    <ServiceCard service={service} />
  ))
  return (
    <Box sx={style.container}>
      <Button
        variant="contained"
        startIcon={<Add />}
        component={Link}
        sx={style.createButton}
        to="/create-service"
      >
        Create new service
      </Button>
      <Box
        component="span"
        sx={{ fontSize: 24, fontWeight: 'medium', marginX: 25 }}
      >
        Your services
      </Box>
      <ul>{serviceList}</ul>
    </Box>
  )
}

export default ServiceProviderProfilePage
