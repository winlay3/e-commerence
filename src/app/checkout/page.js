"use client";
import CustomList from "@/components/CustomList";
import React, { useState } from "react";

import ProductCard from "@/components/ProductCard";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { removeFromCart } from "@/redux/productsSlice";
import { ShoppingCart } from "@mui/icons-material";

export default function Checkout() {
  const products = useSelector((state) => state.productItems.products);
  const cart = useSelector((state) => state.productItems.cart);
  const cartItems = products.filter((product) => cart[product.id]);
  // console.log("cardItems", cartItems);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * cart[item.id];
  }, 0).toFixed(2);
  const dispatch = useDispatch();
  const router = useRouter();
  const [open,setOpen] = useState(false);
  const handleCheckout =() => {
    setOpen(true);
  }
  const handleConfirmCheckout = () => {
    cartItems.forEach((item) => dispatch(removeFromCart(item.id)));
    setOpen(false);
    router.push("/");
  }
  return (
    // <Container maxWidth="md">
    //     <h1>Cary Summary</h1>
    //     <ul>
    //       {cartItems.map((item) => {
    //         return(
    //           <li key={item.id}>
    //             {item.title} {item.price} x {cart[item.id]}
    //           </li>
    //         )
    //       })}
    //     </ul>
    //     <h2>Total: {totalPrice}</h2>
    // </Container>
    <Container maxWidth="md" sx={{ mt: 6 }}>
     {cartItems.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" color="text.secondary">
          🛒 There are no items to checkout!
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Add some items to your cart before proceeding.
        </Typography>
      </Box>
     ): (
      <>
      <Box
        sx={{
          maxHeight: 400,
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: 2,
          padding: 2,
          boxShadow: 2,bgcolor: "background.paper"
        }}
      >
        {cartItems.map((item) => (
          <CustomList
            key={item.id}
            product={{ ...item, quantity: cart[item.id] }}
          />
        ))}
      </Box>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: 2,
          p: 3,
          bgcolor: "background.paper",
          boxShadow: 2,
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Thank you for shopping with us! 🛒
        </Typography>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h6">Your total price will be </Typography>
          <Typography color="primary" variant="h3">
            ${totalPrice}
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, borderRadius: 2, fontSize: "1rem",mt: 2,
              textTransform: "none", }} onClick={handleCheckout}
          >
            Check Out
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDialog-paper": { borderRadius: 4, boxShadow: 5, padding: 2 } }}>
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: "1.2rem", fontWeight: "bold" }}>
          <ShoppingCart color="primary" /> Confirm Checkout
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "1rem", color: "text.secondary" }}>
            Are you sure you want to proceed with the checkout? This action will remove all items from your cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "16px", justifyContent: "space-between" }}>
          <Button onClick={() => setOpen(false)} sx={{ color: "error.main", fontWeight: "bold", textTransform: "none" }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmCheckout} variant="contained" color="primary" sx={{ borderRadius: 2, textTransform: "none", px: 3 }}>
            Yes, Checkout
          </Button>
        </DialogActions>
      </Dialog>
      </>
     )}
      
    </Container>
  );
}
