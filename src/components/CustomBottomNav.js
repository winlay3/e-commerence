'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Home } from '@mui/icons-material';

export default function CustomBottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          bgcolor: "cyan", // Background color
          borderRadius: 0, // No border radius to fill the row
          justifyContent: 'space-around', // Equal spacing between actions
        }}
      >
        <BottomNavigationAction
          label="Home"
          
          icon={<Home />}
          sx={{ flex: 1,color: 'white' }} // Make each action take equal space
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{ flex: 1,color: 'white' }} // Make each action take equal space
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
          sx={{ flex: 1,color: 'white' }} // Make each action take equal space
        />
      </BottomNavigation>
    </Box>
  );
}
