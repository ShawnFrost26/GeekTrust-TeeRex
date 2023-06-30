import React, { useContext } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <Box>
      <Container>
      <Typography variant="h5" align="center" gutterBottom sx={{marginTop:"5rem"}}>
        Items in your cart...
      </Typography>
      </Container>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1" align="center" sx={{height:"60vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          Your cart is empty.
          <Button variant="contained" color="primary" component={Link} to="/" sx={{backgroundColor:"#9c27b0"}}>
              Continue Shopping
            </Button>
        </Typography>
        
      ) : (
        <Box>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} id={item.id} quantity={item.quantity} />
          ))}
           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Typography variant="h6">Sub-Total: </Typography>
            <Typography variant="h6">₹{calculateSubTotal()}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button variant="contained" color="primary" component={Link} to="/" sx={{backgroundColor:"#9c27b0"}}>
              Continue Shopping
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
