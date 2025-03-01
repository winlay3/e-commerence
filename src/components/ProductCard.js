"use client"
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity } from "@/redux/productsSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.productItems.cart)
  return (
    <>
      <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ display: "flex" , alignItems: "stretch"}}>
        <Card
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
          //   display: "flex",
          // flexDirection: "column",
          // justifyContent: "space-between",
          display: "flex", flexWrap: "wrap",alignContent:"space-between",
          height: "100%",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          
            <Box>
            <Image
              src={product.thumbnail || fallbackImage}
              alt="img"
              width={500}
              height={500}
              style={{ width: "100%", height: 200, objectFit: "contain" }}
            />
            <Box classname="content">
              <Typography
              variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,padding: 1
                }}
              >
                {product.title}
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  marginBottom: 2, padding: 1,overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </Typography>
            </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",width: "100%",
                gap: 1, padding: 3,marginTop: "auto"
              }}
            >
              <Button size="small" color="primary" variant="contained"
              onClick={() => dispatch(addToCart(product.id))}>
                Add to Cart
              </Button>
              <Link href={`/products/${product.id}`}>
              <Button size="small" color="secondary" variant="contained">
                View Detail
              </Button>
              </Link>
            </Box>
            
              {cart[product.id] && (
                  <Box>
                    <Button variant="contained" size="small" onClick={() => dispatch(decreaseQuantity(product.id))}> - </Button>
                    <Typography component={"span"} sx={{mx: 2}}>{cart[product.id]}</Typography>
                    <Button variant="contained" size="small" onClick={() => dispatch(increaseQuantity(product.id))}> + </Button>
                  </Box>
              )}
            
          
        </Card>
      </Grid>
    </>
  );
}

export default ProductCard;
