import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { InputSearch } from './InputSearch';

export const Navbar = ({setSearch}) => {
  return (
      <AppBar position="static" sx={{height:'100%'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gifs App
          </Typography>
          <InputSearch setSearch={setSearch}/>
        </Toolbar>
      </AppBar>
  )
}
