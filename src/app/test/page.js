'use client';
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CustomBottomNav from '@/components/CustomBottomNav';
import NavBar from '@/components/NavBar';
import Table from '@/components/Tablemenu';
import Tablemenu from '@/components/Tablemenu';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
function test() {
  return (
    <>
        <NavBar/>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="outlined" startIcon={<Delete />}>
  Delete
</Button>
<Button sx={{ backgroundColor: "purple", color: "yellow" }}>
  Custom Blue Button
</Button>
<Tablemenu/>
<br/>
<IconButton color='success'>
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={2} color="primary" overlap="circular" />
    </IconButton>
    <CustomBottomNav/>
    <Tablemenu/>
    <Tablemenu/>
    </>
  )
}

export default test
