import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ScheduleCalendar from '../../components/schedule-calendar'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card } from '@mui/material'
import SearchAttraction from '../../components/searchbox/search-attraction'
import SearchService from '../../components/searchbox/search-service'
import { Main, AppBar, DrawerHeader } from './elements'
import PublishAlertDialog from '../../components/dialog/publish-dialog'
import SearchResultCard from '../../components/searchResultCard'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import NameAvatar from '../../components/name-avatar';
import SendIcon from '@mui/icons-material/Send';
import { formatDate } from '../../utils';
import { getAttractionsAtLocation } from '../../services'
import { ScheduleStatus } from '../../constant'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import UnPublishAlertDialog from '../../components/dialog/unpublish-dialog'

const drawerWidth = 340

export default function SchedulePage() {
  const user = useSelector(state => state.auth.user);
  const schedule = useSelector(state => state.schedule.currentSchedule);
  const scheduleStatus = useSelector(state => state.schedule.currentSchedule.status);
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [openPublishDialog, setOpenPublishDialog] = React.useState(false)
  const [attractions, setAttractions] = React.useState([]);
  const fetchAttraction = React.useRef(false);
  const [attractionSearch, setAttractionSearch] = React.useState('');
  const [serviceSearch, setServiceSearch] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchAttraction.current = true;
    async function fetchAttractions() {
      const response = await getAttractionsAtLocation(schedule.destination._id);
      if (fetchAttraction.current) {
        setAttractions(response);
      }
    }
    fetchAttractions();
    return () => {
      fetchAttraction.current = false;
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleOpenDialog = () => {
    setOpenPublishDialog(true)
  }

  const handleDialogClose = () => {
    setOpenPublishDialog(false)
  }

  const goHome = () => {
    navigate('/profile');
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
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily: 'Poppins' }}>
            {schedule.title}
          </Typography>
          {
            user._id === schedule.creator._id && (
              scheduleStatus === ScheduleStatus.PRIVATE ?
                (
                  <><Button
                    onClick={handleOpenDialog}
                    variant="contained"
                    color="secondary"
                    sx={{ fontFamily: 'Poppins', marginBottom: 2, marginTop: 2, marginRight: 4 }}
                    disabled={user._id !== schedule.creator._id}
                    endIcon={<SendIcon />}>
                    Publish
                  </Button><PublishAlertDialog
                      open={openPublishDialog}
                      handleClose={handleDialogClose} /></>
                ) :
                (
                  <><Button
                    onClick={handleOpenDialog}
                    variant="contained"
                    color="secondary"
                    sx={{ fontFamily: 'Poppins', marginBottom: 2, marginTop: 2, marginRight: 4 }}
                    disabled={user._id !== schedule.creator._id}
                    endIcon={<CheckCircleOutlineOutlinedIcon />}>
                    Published
                  </Button><UnPublishAlertDialog
                      open={openPublishDialog}
                      handleClose={handleDialogClose} /></>
                )
            )
          }
          
          <NameAvatar onClick={goHome} border name={user.name}/>
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
            src={schedule.img}
            sx={{ height: 145, position: 'relative', width: '100%' }}
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
        <Box sx={{ display:"flex", flexDirection: "column",  padding: 3 }}>
        <Card
          sx={{
            padding: 2,
            mt: -22,
            zIndex: 4,
            width: '90%',
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
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
              <Typography sx={{ fontSize: 11, ml: 1 }}>{schedule.destination.name}</Typography>
            </Box>
          </Box>
        </Card>
        <Box sx={{ display:"flex", flexDirection: "column",  padding: 3 }}>

        {
          user._id !== schedule.creator._id ?
            (<Card>{schedule.description}</Card>)
            :
            (
              <><SearchAttraction setText={setAttractionSearch} /><List spacing="2">
                    {attractions.length === 0 ?
                      (<h6>No attractions. Sorry!</h6>)
                      :
                      attractions.map((attraction) => {
                        if (attraction.name.trim().toLowerCase().includes(attractionSearch.trim().toLowerCase()))
                          return (
                            <ListItem>
                              <SearchResultCard
                                title={attraction.name}
                                address={attraction.address}
                                img={attraction.img} />
                            </ListItem>
                          )
                        else
                          return null
                      })}
                  </List><SearchService /><List>
                      <ListItem>
                        <SearchResultCard
                          title={'Sandals Restaurant'}
                          address={'72-74 Tran Phu, Nha Trang'}
                          img={'https://localinsider.storage.googleapis.com/size/w1000/2021/10/DSC_2460-scaled.jpg'} />
                      </ListItem>
                      <ListItem>
                        <SearchResultCard
                          title={'Vinpearl Luxury'}
                          address={'73 Hung Vuong, Nha Trang'}
                          img={'https://media.expedia.com/hotels/5000000/4430000/4424400/4424377/3e681f92_z.jpg'} />
                      </ListItem>
                    </List></>
            )
        }

          
        </Box>
        </Box>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ScheduleCalendar />
      </Main>
    </Box>
  )
}
