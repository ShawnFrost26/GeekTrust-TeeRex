import React, { useContext } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeItemFromCart, changeItemQuantity } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeItemFromCart(item);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = item.quantity + 1;
    if (newQuantity <= item.availableStock) {
      changeItemQuantity(item.id, newQuantity);
    }
  };
  
  const handleDecreaseQuantity = () => {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      changeItemQuantity(item.id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return item.price * item.quantity;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: 100, height: 100, objectFit: 'contain' }}
          />
          <Box sx={{ ml: 1 }}>
            <Typography variant="subtitle1">{item.name}</Typography>
            <Typography variant="subtitle2">₹{item.price}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body1">Quantity:</Typography>
          <IconButton onClick={handleDecreaseQuantity} disabled={item.quantity <= 1}>
            <Remove />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 1 }}>
            {item.quantity}
          </Typography>
          <IconButton onClick={handleIncreaseQuantity} disabled={item.quantity >= item.availableStock}>
            <Add />
          </IconButton>
        </Box>
          <Typography variant="body1"> Stock left : {item.availableStock - item.quantity}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="body1">Total:</Typography>
          <Typography variant="body1" sx={{ ml: 1 }}>
            ₹{calculateTotal()}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button variant="contained" color="error" startIcon={<Delete />} onClick={handleRemoveFromCart}>
         
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
