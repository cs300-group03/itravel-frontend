import React, { useState } from 'react'
import {
  Box,
  InputBase,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  TextField,
} from '@mui/material'
import { LocationOn, AttachMoney } from '@mui/icons-material'
import Header from '../../components/Header/Header'
import { type } from '../../data/service'
import Logo from '../../assets/logo.png';
import { makeStyles, createStyles } from "@mui/styles";
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createService } from '../../services'
import { MenuItem } from '@mui/material'
import { getAllLocations } from '../../services'
import ErrorAlert from '../../components/error-alert';

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    signUpContainer: {
      zIndex: 5,
    },
    background: {
        maxWidth: '100%',
        height: 'auto',
    },
    logoHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoText: {
        fontSize: 25,
        margin: 0,
        padding: 0
    },
    title: {
        alignSelf: 'center',
    },
    guidedText: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 0,
        fontWeight: 300,
    },
  });
});

const style = {
  authButton: {
      paddingTop: 2,
      paddingBottom: 2,
      paddingStart: 10,
      paddingEnd: 10,
      marginTop: 2,
      fontFamily: 'Poppins',
  },
  infoContainer: {
      marginTop: 2,
      marginBottom: 2,
  }
};

const CreateServicePage = () => {
  const classes = useStyles();
  const [location, setLocation] = useState('');
  const [locations, setLocations] = React.useState([]);
  const [price, setPrices] = useState(40);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const fetchLocation = React.useRef(false);
  const [error, setError] = useState('');

  const toLandingPage = () => {
    navigate('/landing');
  }

  const handleChange = (type) => {
    return (e) => {
      const value = e.target.value;
      if (type === 'location') setLocation(value);
      else if (type === 'price') setPrices(value);
      else if (type === 'name') setName(value);
      else if (type === 'cate') setCategory(value);
    }
  }

  async function createServiceFunc() {
    const response = await createService(location, price, name, category);
    if (response)
      navigate('/profile');
    else {
      setError('Cannot create service.')
    }
  }

  React.useEffect(() => {
    fetchLocation.current = true;
    async function getLocations() {
      const response = await getAllLocations();
      setLocations(response);
    }
    getLocations();
    return () => {
      fetchLocation.current = false;
    };
  }, []);

  return (
    <Grid container className={classes.root}>
      <ErrorAlert errorMessage={error} setErrorMessage={setError}/>
      <Grid item xs={4} className={classes.signUpContainer} container direction="column">
                <div 
                    className={classes.logoHeader}
                    onClick={toLandingPage}>
                    <img className={classes.logo} src={Logo} alt='Logo'/>
                    <h3 className={classes.logoText}>iTravel</h3>
                </div>
                <h3 className={classes.title}>Create a service!</h3>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="Name" 
                    value={name}
                    variant="outlined" 
                    color="secondary"
                    onChange={handleChange('name')}/>
                <TextField
                  sx={style.inputContainer}
                  select
                  required
                  label="Location"
                  variant="outlined"
                  color="secondary"
                  value={location}
                  onChange={handleChange('location')}
                >
                  {
                    locations.map((location) => (
                      <MenuItem key={location._id} value={location._id}>
                        {location.name}
                      </MenuItem>
                    ))
                  }
                </TextField>
                <TextField
                    sx={style.infoContainer}
                    required 
                    label="Price" 
                    variant="outlined" 
                    color="secondary"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    onChange={handleChange('price')}/>
                <TextField
                  sx={style.inputContainer}
                  select
                  required
                  label="Category"
                  variant="outlined"
                  color="secondary"
                  value={category}
                  onChange={handleChange('cate')}
                >
                  {
                    Object.keys(type).map((key) => (
                      <MenuItem key={type[key].value} value={type[key].value}>
                        {type[key].label}
                      </MenuItem>
                    ))
                  }
                </TextField>

                <Button
                    variant="contained"
                    sx={style.authButton}
                    onClick={createServiceFunc}>
                    Go public!
                </Button>
            </Grid>
    </Grid>
  )
}

export default CreateServicePage
