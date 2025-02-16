import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";
function ProductCard({ product }) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <Card
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
              style={{ width: "100%", height: 200, objectFit: "cover" }}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 1, padding: 3,marginTop: "auto"
              }}
            >
              <Button size="small" color="primary" variant="contained">
                Add to Cart
              </Button>
              <Button size="small" color="secondary" variant="contained">
                View Detail variant
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </>
  );
}

export default ProductCard;
