import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function SearchResultCard({ title, address, img }) {
  return (
    <CardActionArea>
      <Card sx={{ display: 'flex', height: 60, width: 'inherit' }}>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={img}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', paddingTop: 1 }}>
            <Typography component="div" sx={{ fontSize: 13 }}>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontSize: 10 }}
            >
              {address}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  )
}
