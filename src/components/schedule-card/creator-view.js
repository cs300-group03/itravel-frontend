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
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

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
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea component={Link} to="/schedule">
        <CardMedia
          component="img"
          height="170"
          image={schedule.img}
          alt="schedule image"
        />
      </CardActionArea>
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

          <Box sx={{ alignItems: 'center', marginLeft: 6 }}>
            <IconButton>
              {schedule.status === 'publish' ? (
                <LockOpen fontSize="small"></LockOpen>
              ) : (
                <Lock></Lock>
              )}
            </IconButton>
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlined fontSize="small"></MoreVertOutlined>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Share</MenuItem>
            </Menu>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
