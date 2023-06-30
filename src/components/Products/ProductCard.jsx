import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageURL,
      quantity: 1,
      availableStock: product.quantity,
    };
    addItemToCart(item);
    navigate('/cart');
  };

  return (
    <Box className="product-card">
      <img className="product-image" src={product.imageURL} alt={product.name} />
      <Typography className="product-name" variant="subtitle1">
        {product.name}
      </Typography>
      <Typography className="product-price" variant="subtitle2">
        ₹ {product.price}
      </Typography>
      <Button className="add-to-cart-btn" variant="contained" color="secondary" onClick={handleAddToCart}>
        <AddShoppingCartIcon /> Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;
