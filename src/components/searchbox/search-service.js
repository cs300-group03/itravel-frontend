import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchService() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "inherit",
        height: 35,
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter service" />
      <IconButton sx={{ p: '10px' }} color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
