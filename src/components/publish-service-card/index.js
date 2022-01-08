import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import { Rating } from '@mui/material'
import style from '../service-card/style'
import { Place, AttachMoney } from '@mui/icons-material'
import NameAvatar from '../../components/name-avatar';

const PublishServiceCard = ({ service }) => {
  const [value, setValue] = React.useState(2)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={service.img[0]}
          alt="schedule image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Box sx={style.descriptionContainer}>
            <Place sx={style.icon} />
            <Box
              component="span"
              sx={{
                fontSize: 12,
                fontWeight: 'light',
                margin: 1,
                textAlignVertical: 'center',
              }}
            >
              Location: {service.location.name}
            </Box>
          </Box>
          <Box sx={style.descriptionContainer}>
            <AttachMoney sx={style.icon} />
            <Box
              component="span"
              sx={{
                fontSize: 12,
                fontWeight: 'light',
                margin: 1,
                textAlignVertical: 'center',
              }}
            >
              Price: {service.price}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="info">
          <NameAvatar name={service.creator.name}/>
          <Typography sx={{fontSize: 12}} component="div">
            {service.creator.name}
          </Typography>
          <div className="icons">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </div>
        </div>
      </CardActions>
    </Card>
  )
}

export default PublishServiceCard
