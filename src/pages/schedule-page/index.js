import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ScheduleCalendar from '../../components/schedule-calendar'
import { Link } from 'react-router-dom'
import { Button, ListItemButton, Card } from '@mui/material'
import SearchAttraction from '../../components/searchbox/search-attraction'
import SearchService from '../../components/searchbox/search-service'
import { Main, AppBar, DrawerHeader } from './elements'
import PublishAlertDialog from '../../components/dialog/publish-dialog'
import SearchResultCard from '../../components/searchResultCard'
import { useSelector } from 'react-redux'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DateRangeIcon from '@mui/icons-material/DateRange'
import NameAvatar from '../../components/name-avatar';

const drawerWidth = 340

export default function SchedulePage() {
  const user = useSelector(state => state.auth.user);
  const schedule = useSelector(state => state.schedule.currentSchedule);
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const [openPublishDialog, setOpenPublishDialog] = React.useState(false)
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
          <Button onClick={handleOpenDialog} color="inherit" sx={{fontFamily: 'Poppins'}}>
            Publish
          </Button>
          <PublishAlertDialog
            open={openPublishDialog}
            handleClose={handleDialogClose}
          />
          <Button color="inherit" sx={{ mr: 2 }}>
            Share
          </Button>
          <Link to="\">
            <NameAvatar border name={user.name}/>
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
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/61/e5.jpg"
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
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              component="div"
              sx={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}
            >
              Trip to Nha Trang Yay!!
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
                22 Dec, 2020 - 28 Dec, 2020
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
              <Typography sx={{ fontSize: 11, ml: 1 }}> Dalat </Typography>
            </Box>
          </Box>
        </Card>
        <Box sx={{ display:"flex", flexDirection: "column",  padding: 3 }}>
        <SearchAttraction />
          <List spacing="2">
            <ListItem>
              <SearchResultCard
                title={'Valley of Love'}
                address={'357 Mai Anh Dao, Da Lat, Lam Dong'}
                img={
                  'https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO-tlty1.jpg'
                }
              />
            </ListItem>
            <ListItem>
              <SearchResultCard
                title={'Hon Mun'}
                address={'Hon Mun, Vinh Nguyen, Nha Trang City, Khanh Hoa'}
                img={
                  'https://vinhnhatrang.net/wp-content/uploads/2019/10/hon-mun-1.jpg'
                }
              />
            </ListItem>
          </List>
          <SearchService />
          <List>
            <ListItem>
              <SearchResultCard
                title={'Sandals Restaurant'}
                address={'72-74 Tran Phu, Nha Trang'}
                img={
                  'https://localinsider.storage.googleapis.com/size/w1000/2021/10/DSC_2460-scaled.jpg'
                }
              />
            </ListItem>
            <ListItem>
              <SearchResultCard
                title={'Vinpearl Luxury'}
                address={'73 Hung Vuong, Nha Trang'}
                img={
                  'https://media.expedia.com/hotels/5000000/4430000/4424400/4424377/3e681f92_z.jpg'
                }
              />
            </ListItem>
          </List>
          
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
