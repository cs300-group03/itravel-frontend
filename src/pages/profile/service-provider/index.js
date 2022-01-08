import React, { useEffect, useRef, useState } from 'react'
import { Box, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import ServiceCard from '../../../components/service-card'
import style from './style'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../../../components/Header/Header';
import { getMyProducts } from '../../../services';

const ServiceProviderProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  const fetchList = useRef(false);
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetchList.current = true;
    async function getMyProductsFunc () {
      const response = await getMyProducts();
      if (fetchList.current && response) {
        setServiceList(response);
      }
    }
    getMyProductsFunc();
    return () => {
      fetchList.current = false;
    }
  });
  
  return (
    <Box sx={style.container}>
      <Header/>
      <Button
        variant="contained"
        startIcon={<Add />}
        component={Link}
        sx={style.createButton}
        to="/service/create"
      >
        Create new service
      </Button>
      <Box
        component="span"
        sx={{ fontSize: 24, fontWeight: 'medium', marginX: 25 }}
      >
        Your services
      </Box>
      { serviceList.length === 0 && (<Box sx={{marginX: 25 }}>You have no service. Create one!</Box>)}
      <ul>{serviceList.map((service) => <ServiceCard service={service} />)}</ul>
    </Box>
  )
}

export default ServiceProviderProfilePage
