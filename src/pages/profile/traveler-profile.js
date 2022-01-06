import React from 'react'
import { Box, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Add } from '@mui/icons-material'
import style from './service-provider/style'
import ScheduleCard from '../../components/schedule-card/creator-view'
import schedule from '../../data/schedule'
import './style.css'

const schedules = [schedule, schedule, schedule, schedule]
const scheduleList = schedules.map((schedule) => (<ScheduleCard schedule={schedule} />))
const TravelerProfile = ({ user }) => {
  // const scheduleList = user.schedules.map((schedule) => (
  //   <ScheduleCard schedule={schedule} />
  // ))
  return (
    <Box sx={style.container}>
      <Button variant="contained" startIcon={<Add />} sx={style.createButton}>
        Create new schedule
      </Button>
      <Box
        component="span"
        sx={{ fontSize: 24, fontWeight: 'medium', marginX: 25 }}
      >
        Your schedules
      </Box>
      <div class="card-list">
        {scheduleList}
      </div>
    </Box>
  )
}

export default TravelerProfile
