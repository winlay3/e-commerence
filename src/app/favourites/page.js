"use client";
import React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useSelector } from "react-redux";
import ProductCard from "@/components/ProductCard"; // Adjust the import path

function Favorite() {
  // Get the favorites and products from the Redux store
  const favorites = useSelector((state) => state.productItems.favorites || {});
  const products = useSelector((state) => state.productItems.products || []);

  // Filter the products to get only the favorited ones
  const favoriteProducts = products.filter((product) => favorites[product.id]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Favorite Products
      </Typography>

      {favoriteProducts.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No favorite products yet.
        </Typography>
      ) : (
        <Container sx={{mt: 2}}>
          <Grid2 container spacing={2}>
          {favoriteProducts.map((product) => (
            <React.Fragment  key={product.id} >
              <ProductCard product={product} />
            </React.Fragment>
          ))}
          </Grid2>
          </Container>
         
      )}
    </Box>
  );
}

export default Favorite;