"use client";
import CustomList from "@/components/CustomList";
import React from "react";

import ProductCard from "@/components/ProductCard";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";

export default function Checkout() {
  const products = useSelector((state) => state.productItems.products);
  const cart = useSelector((state) => state.productItems.cart);
  const cartItems = products.filter((product) => cart[product.id]);
  console.log("cardItems", cartItems);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * cart[item.id];
  }, 0).toFixed(2);

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
      {/* {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            {index < 3 ? <CustomList product={product} /> : null}
          </React.Fragment>
        );
      })} */}
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
              textTransform: "none", }}
          >
            Check Out
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
