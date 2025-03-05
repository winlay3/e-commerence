"use client";
import { Box, Button, Card, Rating, Typography, IconButton } from "@mui/material";
import { AddCircleOutlineOutlined, Favorite, FavoriteBorder, RemoveCircleOutline } from "@mui/icons-material"; // Favorite icons
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite, decreaseQuantity, increaseQuantity, removeFromFavorite } from "@/redux/productsSlice";
import Link from "next/link";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  // const [isFavorite, setIsFavorite] = useState(false); // To track favorite status
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productItems.cart)
  const favorites = useSelector((state) => state.productItems.favorites || {});
  // const isFavorite = favorites[product?.id] || false;
  const isFavorite = product ? favorites[product.id] || false : false;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await data.json();
      console.log(result);
      setProduct(result);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const roundedRating = Math.round(product.rating);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(product.id));
    }else {
      dispatch(addToFavorite(product.id))
    }
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Card sx={{ maxWidth: 600, p: 3, boxShadow: 3, borderRadius: "16px" }}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: 300,
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5" fontWeight="bold">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {product.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            {/* Rating on the left */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="read-only" value={roundedRating} precision={1} readOnly />
              <Typography variant="body2" sx={{ ml: 1, fontSize: "1rem" }}>
                {roundedRating} / 5
              </Typography>
            </Box>

            {/* Favorite button */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color={isFavorite ? "error" : "default"} // Color changes based on favorite status
                onClick={handleFavoriteClick}
                size="large" // Increase the size of the favorite icon
              >
                {isFavorite ? <Favorite /> : <FavoriteBorder />} {/* Change icon based on favorite status */}
              </IconButton>
            </Box>
          </Box>

          <Typography variant="h6" color="primary" >
            Price: ${product.price}
          </Typography>

          {/* Quantity (Static for now) */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Quantity: <IconButton size="small" onClick={() => dispatch(decreaseQuantity(product.id))}>
                          <RemoveCircleOutline />
                        </IconButton>
              {cart[product.id] || 0} <IconButton size="small" onClick={() => dispatch(increaseQuantity(product.id))}>
                          <AddCircleOutlineOutlined />
                        </IconButton>
            </Typography>
          </Box>
        </Box>

        {/* Add to Cart Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 1,
            padding: 2,
            marginTop: "auto",
          }}
        >
         
          <Button size="medium" color="primary" variant="contained"
          onClick={() => dispatch(addToCart(product.id))}>
            Add to Cart
          </Button>
          
        </Box>
      </Card>
    </Box>
  );
}

export default ProductDetail;
