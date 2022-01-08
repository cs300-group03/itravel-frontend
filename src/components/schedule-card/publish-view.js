import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, makeStyles } from '@mui/material'
import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './style.css'
import NameAvatar from '../../components/name-avatar';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentSchedule } from '../../store/schedule'

const style = {
  title: {
    fontFamily: 'Poppins'
  }
};

const PublishScheduleCard = ({ schedule }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goSchedule = () => {
    dispatch(setCurrentSchedule(schedule));  
    navigate('/schedule');
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={goSchedule}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={schedule.img || process.env.REACT_APP_DEFAULT_IMG}
          alt="schedule image"
        />
        <CardContent>
          <Typography 
            sx={style.title}
            gutterBottom variant="h5" 
            component="div">
            {schedule.title}
          </Typography>
          <div class="description">{schedule.description}</div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="info">
          <NameAvatar name={schedule.creator.name}/>
          <span>{schedule.creator.name}</span>
          <div className="icons">
            <ThumbUpAltOutlined></ThumbUpAltOutlined>
            <p>{schedule.upvote}</p>
            <ThumbDownAltOutlined></ThumbDownAltOutlined>
            <p>{schedule.downvote}</p>
          </div>
        </div>
      </CardActions>
    </Card>
  )
}

export default PublishScheduleCard
