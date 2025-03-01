import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function CustomCart() {
  const cart = useSelector((state) => state.productItems.cart);
  const totalCount = Object.values(cart).length;
  return (
    <Badge badgeContent={totalCount} color="warning">
      <Link href="/checkout">
      <ShoppingCart sx={{color: "white"}} />
      </Link>
    </Badge>
  );
}
