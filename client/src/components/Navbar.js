import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthService from '../utils/auth';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'purple', borderRadius: '15px' }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color='inherit' onClick = {(e) => {localStorage.removeItem('id_token');e.preventDefault();window.location.assign('/')}}
>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

