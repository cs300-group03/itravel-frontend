import * as React from 'react'
import {
  Box,
  Button,
  TextField,
  Link,
  MenuItem
} from '@mui/material'
import PlanTrip from '../../assets/plan-trip.png'
import style from './style'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Link as LinkRoute } from 'react-router-dom'
import { createSchedule, getAllLocations } from '../../services'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSchedule } from '../../store/schedule';
import Header from '../../components/Header/Header';
import ErrorAlert from '../../components/error-alert';
import CountdownAlert from '../../components/count-down-alert';

const CreateSchedulePage = () => {
  const user = useSelector(state => state.auth.user);
  const [value, setValue] = React.useState([null, null])
  const fetchLocation = React.useRef(false);
  const [locations, setLocations] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [destination, setDestination] = React.useState(null);
  const [createRequest, setCreateRequest] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  React.useEffect(() => {
    async function createScheduleFunc() {
      const startDate = new Date(value[0]).getTime();
      const endDate = new Date(value[1]).getTime();
      const duration = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));
      const response = await createSchedule(title, destination, startDate, endDate, duration);
      dispatch(setCurrentSchedule(response));
      setErrorMessage('');
      setSuccessMessage('Created successfully.');
    }
    if (createRequest) {
      createScheduleFunc();
    }
  }, [createRequest]);

  const handleChange = (type) => {
    return (event) => {
      const value = event.target.value;
      if (type === 'dest') setDestination(value);
      else if (type === 'title') setTitle(value);
    }
  }

  const sendCreateRequest = () => {
    if (!title.trim()) {
      setErrorMessage('Please provide the title.');
    } else if (!value || value.length !== 2 || !value[0] || !value[1]) {
      setErrorMessage('Please give start and end date.');
    } else if (destination === null) {
      setErrorMessage('Please choose a destination.');
    } else {
      setCreateRequest(true);
    }
  }

  return (
    <>
      <Header/>
      {
        successMessage ? 
          <CountdownAlert navigate={navigate} message={successMessage} redirectPath={'/schedule'}/>
          : null
      }
      <ErrorAlert errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
      <Box sx={style.container}>
        <Box sx={style.imageContainer}>
          <Box
            component="img"
            src={PlanTrip}
            sx={{
              width: '85%',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flex: 2,
            alignItems: 'flex-start',
          }}
        >
          <Box sx={style.formContainer}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                fontSize: 30,
                fontWeight: '600',
                fontFamily: 'Poppins',
                marginBottom: 14,
              }}
            >
              Plan a new trip
            </Box>
            <TextField
              sx={style.inputContainer}
              required
              label="Title"
              variant="outlined"
              color="secondary"
              onChange={handleChange('title')}
            />
            <TextField
              sx={style.inputContainer}
              select
              required
              label="Destination"
              variant="outlined"
              color="secondary"
              value={destination}
              onChange={handleChange('dest')}
            >
              {
                locations.map((location) => (
                  <MenuItem key={location._id} value={location._id}>
                    {location.name}
                  </MenuItem>
                ))
              }
            </TextField>
            <Box >
            <LocalizationProvider dateAdapter={AdapterDateFns} >
              <div>
                <DateRangePicker
                  calendars={1}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} label="Start date" color="secondary" sx={{width: 237}}/>
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} label="End date" color="secondary" sx={{width: 237}} />
                    </React.Fragment>
                  )}
                />
              </div>
            </LocalizationProvider>
            </Box>
            <Link
              component="button"
              underline="hover"
              color="secondary"
              sx={{
                mt: 10,
                fontFamily: 'Poppins',
                fontSize: 14,
              }}
            >
              + Invite collaboration
            </Link>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={style.button}
              onClick={sendCreateRequest}
            >
              Create schedule
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CreateSchedulePage
