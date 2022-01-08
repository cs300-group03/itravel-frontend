import React, { useEffect, useRef, useState } from 'react'
import Hero from '../../components/HeroSection/HeroSection'
import scrollreveal from 'scrollreveal'
import ScrollToTop from '../../components/ScrollToTop'
import styled from 'styled-components'
import SearchService from '../../components/searchbox/search-service'
import ServicesLine from '../../components/service-line'
import FeaturedServices from '../../components/featuredServices'
import FeaturedSchedules from '../../components/featuredSchedules/featuredSchedules'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import { getAllProducts } from '../../services'
import Header from '../../components/Header/Header'

export default function Explore() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    })
    sr.reveal(
      `
        header,
        #servicesearch,
        #cates
        #services,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  }, [])
  return (
    <div>
      <Header/>
      <ScrollToTop />
      <Section id="title">
        <div className="title">
          <h1>iTravel</h1>
          <p>Let's explore some highlight services</p>
        </div>
      </Section>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          mr: 'auto',
          ml: 'auto',
          width: '50%',
          height: 47,
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter service" />
        <IconButton sx={{ p: '10px' }} color="primary" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <h2
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          alignContent: 'center',
          marginTop: '2rem',
        }}
      >
        Categories
      </h2>
      <ServicesLine />
      <h2
        style={{
          textAlign: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textAlignVertical: 'center',
          alignContent: 'center',
          marginTop: '2rem',
        }}
      >
        Featured services
      </h2>
      <FeaturedServices></FeaturedServices>
    </div>
  )
}
const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

    .title {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1rem;
      }   
    }
  }
`
