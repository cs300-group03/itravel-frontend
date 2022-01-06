import * as React from 'react'
import {
  Box,
  Button,
  TextField,
  Link,
} from '@mui/material'
import PlanTrip from '../../assets/plan-trip.png'
import style from './style'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

const CreateSchedulePage = () => {
  // const classes = useStyles()
  const [value, setValue] = React.useState([null, null])

  return (
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
            }}
          >
            Plan a new trip
          </Box>
          <TextField
            sx={style.inputContainer}
            label="Destination"
            variant="outlined"
            color="secondary"
          />
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
          >
            Create schedule
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateSchedulePage
