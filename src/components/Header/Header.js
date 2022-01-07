import React from 'react'
import './Header.css'
import { createStyles, makeStyles } from "@mui/styles";
import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { Notifications, ExpandMore } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import NameAvatar from '../../components/name-avatar';
import { setUser } from '../../store/auth';

const useStyles = makeStyles((theme) => {
  return createStyles({
    header: {
      height: '8vh',
      backgroundColor: theme.palette.dark.main,
      display: 'flex',
    },
    leftSide: {
      alignItems: 'center',
      marginLeft: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },
    logoText: {
        fontSize: 20,
        margin: 0,
        marginLeft: 4,
        padding: 0,
        color: 'white',
        marginRight: 20
    },
    rightSide: {
      float: 'right',
      alignItems: 'center',
      marginRight: 10,
    },
    icon: {
      margin: 0,
      padding: 0,
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    name: {
      color: theme.palette.neutral.main,
      '&:hover': {
        color: theme.palette.primary.main,
      }
    },
    menu: {
      float: 'none',
      color: theme.palette.dark.main,
      paddingRight: '16px',
      paddingLeft: '16px',
      paddingTop: '12px',
      paddingBottom: '12px',
      textDecoration: 'none',
      display: 'block',
      textAlign: 'left',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      }
    }
  })
});

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRouteChange = (routeName) => {
    return (event) => {
      navigate(routeName);
    }
  }

  const logout = () => {
    dispatch(setUser(null));
    localStorage.setItem('token', '');
    navigate('/landing');
  }

  const routes = [
    {
      label: 'Home',
      routeName: '/',
    },
    {
      label: 'Explore services',
      routeName: '/services',
    },
  ];

  const user = useSelector(state => state.auth.user);
  return (
    <div className={classes.header}>
      <Grid container direction="row" className={classes.leftSide}>
        <Grid item>
          <img className={classes.logo} src={Logo} alt="logo"></img>
        </Grid>
        <Grid item>
          <h4 className={classes.logoText}>iTravel</h4>
        </Grid>
        <ButtonGroup>
          {
            routes.map((route) => (
              <Button
                sx={style.routeButton}
                onClick={handleRouteChange(route.routeName)}>
                  {route.label}
              </Button>
            ))
          }
        </ButtonGroup>
      </Grid>
      {
        user.name &&
        (
          <Grid container direction="row-reverse" className={classes.rightSide} spacing={4}>
            <Grid item className={classes.icon}>
              <div class="dropdown">
                  <ExpandMore className={classes.icon} fontSize="medium" color="neutral" />
                  <div className="dropdown-content">
                    <a 
                      className={classes.menu}
                      href='/'>
                        Settings
                    </a>
                    <a
                      className={classes.menu} 
                      onClick={logout}
                      href='/landing'
                      >
                        Log out
                    </a>
                  </div>
                </div>
            </Grid>
            <Grid item>
              <Notifications className={classes.icon} fontSize="medium" color="neutral"/>
            </Grid>
            <Grid item>
              <Typography className={classes.name} sx={style.name} onClick={handleRouteChange('/profile')}>
                {user.name}
              </Typography>
            </Grid>
            <Grid item>
              <NameAvatar name={user.name}/>
            </Grid>
          </Grid>
        )
      }
    </div>
  );
}

const style = {
  routeButton: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  name: {
    fontFamily: 'Poppins',
    hover: {
      color: '#F4A442'
    }
  }
}

export default Header;
