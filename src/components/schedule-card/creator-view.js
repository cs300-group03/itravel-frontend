import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea} from '@mui/material'
import { Lock, LockOpen, MoreVertOutlined } from '@mui/icons-material'

const style = {
  dateStyle: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'light',
    color: '#767676',
    m: 1,
  },
}

export default function ScheduleCard({ schedule }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          padding="3"
          image={schedule.img}
          alt="schedule image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {schedule.title}
          </Typography>

          <Box sx={{ display: 'flex', direction: 'row' }}>
            <AvatarGroup max={4}>
              <Avatar
                sx={{ width: 30, height: 30, bgcolor: 'secondary.main' }}
                src="schedule.creators.avatar"
              >
                H
              </Avatar>
              <Avatar
                sx={{ width: 30, height: 30, bgcolor: 'primary.main' }}
                src="schedule.creators.avatar"
              >
                V
              </Avatar>
            </AvatarGroup>
            <Box component="span" sx={style.dateStyle}>
              {schedule.startDate} - {schedule.endDate}
            </Box>

            <Box sx={{ alignItems: 'center', marginLeft: 12 }}>
              {schedule.status == 'publish' ? (
                <LockOpen></LockOpen>
              ) : (
                <Lock></Lock>
              )}
              <MoreVertOutlined></MoreVertOutlined>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
