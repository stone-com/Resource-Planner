import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function SectionHeader({title, addButton, editButton}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: 'purple', borderRadius: '15px' }}
      >
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
           {title}
          </Typography>
          {editButton}
          {addButton}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
