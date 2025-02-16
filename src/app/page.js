import ProductCard from "@/components/ProductCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

export default async function Page() {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();
  return (
    <Container >
    <Grid container spacing={2}>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product}/>
        </React.Fragment>
      ))}
    </Grid>
    </Container>
  );
}
