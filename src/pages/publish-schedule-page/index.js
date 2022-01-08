import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ScheduleCalendar from '../../components/schedule-calendar'
import { Link } from 'react-router-dom'
import { Button, Card } from '@mui/material'
import { Main, AppBar, DrawerHeader } from '../schedule-page/elements'
import DateRangeIcon from '@mui/icons-material/DateRange'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CardContent from '@mui/material/CardContent'
import { useSelector } from 'react-redux'
import { ThumbDown, ThumbUp } from '@mui/icons-material'
import NameAvatar from '../../components/name-avatar'
import { formatDate } from '../../utils';
const drawerWidth = 340

export default function PublishSchedulePage() {
  const user = useSelector(state => state.auth.user);
  const schedule = useSelector((state) => state.schedule.currentSchedule)
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {schedule.title}
          </Typography>
          <IconButton color="neutral" aria-label="upvote" component="span">
            <ThumbUp />
            <Typography sx={{ ml: 2, fontSize: 20 }}>1453</Typography>
          </IconButton>
          <IconButton color="neutral" aria-label="upvote" component="span">
            <ThumbDown />
            <Typography sx={{ ml: 2, fontSize: 20, mr: 2 }}>2</Typography>
          </IconButton>
          <Link to="\">
            <NameAvatar name={user.name}/>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            component="img"
            // src={schedule.img}
            src={schedule.img}
            sx={{ height: 150, position: 'relative', width: '100%' }}
          ></Box>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: 'black',
              zIndex: '2',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Card
          sx={{
            height: 100,
            padding: 3,
            mt: -10,
            zIndex: 2,
            width: '90%',
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              component="div"
              sx={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}
            >
             {schedule.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <DateRangeIcon></DateRangeIcon>
              <Typography sx={{ fontSize: 11, ml: 1 }}>
                {formatDate(schedule.startDate)} - {formatDate(schedule.endDate)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <LocationOnIcon></LocationOnIcon>
              <Typography sx={{ fontSize: 11, ml: 1 }}> {schedule.destination.name} </Typography>
            </Box>
          </Box>
        </Card>
        <Box
          sx={{ padding: 4, display: 'flex', flexDirection: 'column', mt: 2 }}
        >
          <Box
            sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2}}
          >
            <NameAvatar name={schedule.creator.name}/>
            <Typography sx={{ fontSize: 12, ml: 1, fontWeight: '500' }}>
              {schedule.creator.name}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ fontSize: 10, padding: 2 }}
          >
            {schedule.description}
          </Typography>
          <Button
            sx={{ mt: 2, mr: 'auto', ml: 'auto', width: '70%' }}
            color="primary"
            variant="contained"
          >
            Save schedule
          </Button>
          <Button
            sx={{ mt: 2, mr: 'auto', ml: 'auto', width: '70%' }}
            color="secondary"
            variant="contained"
          >
            Duplicate schedule
          </Button>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ScheduleCalendar />
      </Main>
    </Box>
  )
}
