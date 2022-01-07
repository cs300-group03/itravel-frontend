import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Select from 'react-select';
import homeImage from "../../images/img-1.jpg";
import { getAllLocations } from "../../services";
import { MenuItem, TextField, Button, Grid, FormControl, RadioGroup, FormControlLabel, Radio, Checkbox } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { fontFamily } from "@mui/system";
import { getPublicSchedules } from "../../services";
import { setFilteredSchedules } from "../../store/schedule";
import ErrorAlert from "../error-alert";
import { useNavigate } from "react-router-dom";
const { useState } = React;

const useStyles = makeStyles((theme) => {
  return createStyles({
    search: {
      maxWidth: '24vw',
      backgroundColor: 'white', 
      borderRadius: 4,
      alignContent: 'center',
      alignItems: 'stretch',
      padding: 12,
    },
    searchBox: {
      minWidth: '20vw',
    },
    radioButton: {
      typography: 'Poppins',
      fontFamily: 'Poppins'
    }
  });
});

const style = {
  designButton: {
    fontFamily: 'Poppins',
  },
  searchBox: {
    minWidth: '20vw',
    margin: 2,
    fontFamily: 'Poppins',
    textAlign: 'center'
  },
  radioButton: {
    typography: 'Poppins',
  }
};

export default function Hero() {
  const classes = useStyles();
  const fetchList = useRef(false);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState(2);
  const [filter, setFilter] = useState(0);
  const [locations, setLocations] = useState([]);
  const [filterDuration, setFilterDuration] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchList.current = true;
    async function getLocations() {
      const response = await getAllLocations();
      if (fetchList.current) {
        setLocations(response);
      }
    }
    getLocations();
    return () => {
      fetchList.current = false;
    }
  }, []);

  const filterSchedules = async () => {
    let durationInt = 0;
    if (filterDuration) {
      try {
        durationInt = parseInt(duration);
      } catch (error) {
        setErrorMessage('Invalid duration.');
        return;
      }
      if (durationInt <= 0) {
        setErrorMessage('Invalid duration');
        return;
      }
    }
    const response = await getPublicSchedules(destination, durationInt, filter);
    setErrorMessage('');
    console.log(response);
    dispatch(setFilteredSchedules(response));
  }

  const handleChange = (type) => {
    return (event) => {
      const value = event.target.value;
      if (type === 'dest') setDestination(value);
      else if (type === 'duration') setDuration(value);
      else if (type === 'filter') setFilter(value);
    }
  };

  const goCreateSchedule = () => {
    navigate('/schedule/create');
  }

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <ErrorAlert errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      <div className="content">
        <div className="title">
          
          <p>
            Hi <b>{user.name}</b>, <br/> let's explore some schedules to give it a go!
          </p>
          
        </div>
        <Grid
          container 
          direction="column" 
          className={classes.search}>

          <Grid item>
            <TextField
              inputProps={{
                sx: {
                  textAlign: 'left',
                  fontFamily: 'Poppins'
                }
              }}
              select
              size="small"
              variant="outlined"
              sx={style.searchBox}
              color="secondary"
              label="Destination"
              value={destination}
              onChange={handleChange('dest')}>
                {
                  locations.map((location) => (
                    <MenuItem key={location._id} value={location._id}>
                      {location.name}
                    </MenuItem>
                  ))
                }
            </TextField>
          </Grid>
          <FormControlLabel 
            checked={filterDuration}
            sx={{alignSelf: 'center'}} 
            label="Duration" 
            control={<Checkbox color="secondary"/>}
            size="small"
            onChange={() => { setFilterDuration(!filterDuration); }}
          />
          <Grid item>
            <TextField
              type="number"
              value={duration}
              size="small"
              variant="outlined"
              sx={style.searchBox}
              color="secondary"
              label="Trip duration"
              disabled={!filterDuration}
              onChange={handleChange('duration')}>
            </TextField>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <RadioGroup row
                value={filter}
                onChange={handleChange('filter')}>
                <FormControlLabel
                  value={0} 
                  size="small"
                  control={<Radio inputProps={{sx: {fontFamily: 'Poppins'}}} className={classes.radioButton} color="secondary"/>} 
                  label="Hotest"/>
                <FormControlLabel size ="small" value={1} control={<Radio color="secondary"/>} label="Latest"/>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" sx={style.designButton} onClick={filterSchedules}>Search</Button>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={style.designButton} onClick={goCreateSchedule}>
            or design your own schedule &gt;&gt;
          </Button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  .background {
    img {
      width: 100%;
      height: 90%;
      filter: brightness(60%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {

      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
        color: white
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: white

      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #125C13;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      .button__wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
          alignSelf: 'center',
                borderRadius: 10,

        & > * {
          border: none;
          background-color: white;
          box-shadow: 0px 0px 10px $clr-gray200;
          font-weight: bold;
          font-size: 1rem;
          color: inherit;
          border-radius: 50%;
          outline: none;
          height: 2rem;
          width: 2rem;
          cursor: pointer;
          transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
      
          &:hover {
            background-color: $clr-gray200;
          }
      
          &:active {
            transform: scale(0.9);
          }
      
          &:focus {
            box-shadow: 0 0 0 3px $clr-gray500;
          }
        }
      }
      button1 {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #125C13;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #F4A442;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: #125C13;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;