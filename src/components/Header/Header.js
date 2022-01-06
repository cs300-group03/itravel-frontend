import React from 'react'
import './Header.css'
import { Avatar, Button } from '@mui/material'
import { Notifications, ExpandMore } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const unauthenOption = (
  <div className="header-unauthen-right">
    <Link to="/">
      <Button color="primary" variant="contained">
        Sign Up
      </Button>
    </Link>
    <Link to="/">
      <Button color="primary" variant="contained">
        Sign In
      </Button>
    </Link>
  </div>
)

const authenOption = (
  <>
    <div className="header-menu">
      <Link className="item-link" to="\">
        {' '}
        Home{' '}
      </Link>
      <Link className="item-link" to="\">
        {' '}
        Explore services{' '}
      </Link>
    </div>

    <div className="header-right">
      <Link className="header-info" to="/profile-page">
        <Avatar src="https://icdn.dantri.com.vn/2017/emma-watson-5-1488809769584.jpg" />
        <h4> Emma Watson </h4>
      </Link>

      <div className="header-icon">
        <Link className="notification-link" to="\">
          <Notifications fontSize="large" />
        </Link>
        <div class="dropdown">
          <ExpandMore fontSize="large" />
          <div class="dropdown-content">
            <Link to="/">Settings</Link>
            <Link to="/">Log out</Link>
          </div>
        </div>
      </div>
    </div>
  </>
)

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to="/" className="header-logo" color="neutral">
        <img src={Logo} alt="logo"></img>
        iTravel
      </Link>

      {user ? authenOption : unauthenOption}
    </div>
  )
}

export default Header
