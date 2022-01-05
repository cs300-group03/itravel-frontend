import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, IconButton } from '@mui/material'
import { Lock, LockOpen, MoreVertOutlined } from '@mui/icons-material'

const style = {
  dateStyle: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'light',
    color: '#767676',
    fontSize: 11,
    m: 1,
  },
}

export default function ScheduleCard({ schedule }) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={schedule.img}
          alt="schedule image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {schedule.title}
          </Typography>

          <Box sx={{ display: 'flex', direction: 'row' }}>
            <AvatarGroup max={3}>
              <Avatar
                sx={{ width: 26, height: 26, bgcolor: 'secondary.main' }}
                src="schedule.creators.avatar"
              >
                H
              </Avatar>
              <Avatar
                sx={{ width: 26, height: 26, bgcolor: 'primary.main' }}
                src="schedule.creators.avatar"
              >
                V
              </Avatar>
            </AvatarGroup>
            <Box component="span" sx={style.dateStyle}>
              {schedule.startDate} - {schedule.endDate}
            </Box>
            <Box sx={{ alignItems: 'center', marginLeft: 6}}>
              <IconButton>
                {schedule.status === 'publish' ? (
                  <LockOpen fontSize="small"></LockOpen>
                ) : (
                  <Lock></Lock>
                )}
              </IconButton>
              <IconButton>
                <MoreVertOutlined fontSize="small"></MoreVertOutlined>
              </IconButton>
            </Box>
            
          </Box>
        </CardContent>
      </CardActionArea>
     
    </Card>
  )
}
