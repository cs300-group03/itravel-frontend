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

const style = {
  title: {
    fontFamily: 'Poppins'
  }
};

const PublishScheduleCard = ({ schedule }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={schedule.img}
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
          <Avatar src="https://icdn.dantri.com.vn/2017/emma-watson-5-1488809769584.jpg"></Avatar>
          <span>Emma Watson</span>
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
