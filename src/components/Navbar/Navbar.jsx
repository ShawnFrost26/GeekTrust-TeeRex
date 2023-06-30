import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  return (
    <AppBar sx={{backgroundColor:"#9c27b0"}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1}}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>TeeRex</Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            Cart
            <Badge badgeContent={cartCount} color="error" sx={{ marginLeft: 1 }}>
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
