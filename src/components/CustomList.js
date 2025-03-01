import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box, Button, IconButton } from '@mui/material';
import { AddCircleOutlineOutlined, DeleteOutline, RemoveCircleOutline } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '@/redux/productsSlice';

export default function CustomList({product}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productItems.cart)
  return (
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper',paddingTop: '30px' }}>
      <ListItem alignItems="flex-start"
      sx={{display: 'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src={product.thumbnail} alt='img' width={80} height={80}/>
          
        </Box>
        {/* <ListItemText
          
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {product.title}
              </Typography>
            </React.Fragment>
          }
          secondary={`$ ${product.price}`}
        /> */}
        <Box sx={{ flex: 1, ml: 4, minWidth: 0 }}>
          <Typography 
            component="span"
            variant="body2"
            sx={{ color: 'primary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',fontSize: '1rem' }}
          >
            {product.title}
          </Typography>
          </Box>
          <Box>
          <Typography 
            component="span"
            variant="body2" color="primary"
            sx={{  mr: 6,fontSize: '1rem' }}
          >
            ${product.price}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',mr: 3 }}>
          <IconButton size="small" onClick={() => dispatch(decreaseQuantity(product.id))}>
            <RemoveCircleOutline />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 1 }}>
            {cart[product.id] }
          </Typography>
          <IconButton size="small" onClick={() => dispatch(increaseQuantity(product.id))}>
            <AddCircleOutlineOutlined />
          </IconButton>
        </Box>
        <Button
          variant="outlined"
          color="error"
          size='small'
          startIcon={<DeleteOutline />}
        >
          Remove
        </Button>
      </ListItem>
      
      <Divider variant="inset" component="li" />
      
    </List>
  );
}
