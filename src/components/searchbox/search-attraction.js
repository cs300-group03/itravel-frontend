import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { TextField } from '@mui/material';

export default function SearchAttraction({setText}) {
  const handleChange = (event) => {
    setText(event.target.value);
  }
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
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Enter attraction" onChange={handleChange}/>
      <IconButton sx={{ p: '10px' }} color="primary" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
