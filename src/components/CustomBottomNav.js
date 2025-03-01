'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Home } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function CustomBottomNav() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  
  const handleNavigation = (newValue) => {
    setValue(newValue);
    
    // Navigate based on selected index
    if (newValue === 0) {
      router.push('/'); // Go to Home
    } else if (newValue === 1) {
      router.push('/favourites'); // Go to Favorites
    } else if (newValue === 2) {
      router.push('/checkout'); // Go to Checkout
    }
  };

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
        onChange={(event, newValue) => handleNavigation(newValue)}
        sx={{
          bgcolor: "cyan", // Background color
          borderRadius: 0, // No border radius to fill the row
          justifyContent: 'space-around', // Equal spacing between actions
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          sx={{
            flex: 1,
            color: 'white',
            fontSize: '1.2rem', // Increase font size for Home
          }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{
            flex: 1,
            color: 'white',
            fontSize: '1.2rem', // Increase font size for Favorites
          }}
        />
        <BottomNavigationAction
          label="Check Out"
          icon={<ShoppingCart />}
          sx={{
            flex: 1,
            color: 'white',
            fontSize: '1.2rem', // Increase font size for Checkout
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
