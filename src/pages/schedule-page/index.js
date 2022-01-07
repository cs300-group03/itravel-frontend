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
import { Button, ListItemButton } from '@mui/material'
import SearchAttraction from '../../components/searchbox/search-attraction'
import SearchService from '../../components/searchbox/search-service'
import { Main, AppBar, DrawerHeader } from './elements'
import PublishAlertDialog from '../../components/dialog/publish-dialog'
import SearchResultCard from '../../components/searchResultCard'
import { useSelector } from 'react-redux'

const drawerWidth = 290

export default function SchedulePage() {
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
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {schedule.title}
          </Typography>
          <Button onClick={handleOpenDialog} color="inherit">
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
            <Avatar src="https://icdn.dantri.com.vn/2017/emma-watson-5-1488809769584.jpg" />
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
        <Box sx={{ padding: 3 }}>
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ScheduleCalendar />
      </Main>
    </Box>
  )
}
