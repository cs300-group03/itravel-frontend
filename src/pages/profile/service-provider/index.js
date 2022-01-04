import React from 'react'
import { Box, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import ServiceCard from '../../../components/service-card'

const ServiceProviderProfilePage = ({ user }) => {
  const serviceList = user.services.map((service) => (
    <ServiceCard service={service} />
  ))
  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{
          fontFamily: 'Poppins',
          textTransform: 'none',
          color: '#ffffff',
          borderRadius: 15,
        }}
      >
        Create new service
      </Button>
      <ul>{serviceList}</ul>
    </Box>
  )
}

export default ServiceProviderProfilePage
