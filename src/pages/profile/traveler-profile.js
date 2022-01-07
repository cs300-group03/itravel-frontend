import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import style from './service-provider/style'
import ScheduleCard from '../../components/schedule-card/creator-view'
import schedule from '../../data/schedule'
import { Link } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import { mySchedules } from '../../services'
import { setSchedules } from '../../store/schedule'

const TravelerProfile = () => {
  const myScheduleList = useSelector(state => state.schedule.mySchedules);
  const [trash, setTrash] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getSchedules() {
      const response = await mySchedules();
      if (response) {
        dispatch(setSchedules(response));
        console.log(response);
      }
    }
    getSchedules();
  }, [trash]);

  return (
    <Box sx={style.container}>
      <Header/>
      <Button 
      variant="contained" 
      startIcon={<Add />} 
      sx={style.createButton} 
      component = {Link}
      to="/schedule/create"
      >
        Create new schedule
      </Button>
      <Box
        component="span"
        sx={{ fontSize: 24, fontWeight: 'medium', marginX: 25 }}
      >
        Your schedules
      </Box>
      <div class="card-list">
        {
          myScheduleList.map((schedule) => (<ScheduleCard key={schedule._id} schedule={schedule}/>))
        }
      </div>
    </Box>
  )
}

export default TravelerProfile;
