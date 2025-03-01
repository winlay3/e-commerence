import ProductCard from "@/components/ProductCard";
import ProductCards from "@/components/ProductCards";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

export default async function Page() {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();
  return (
    <Container sx={{mt: 2}}>
    <Grid container spacing={2}>
      <ProductCards products={products}/>
    </Grid>
    </Container>
  );
}
