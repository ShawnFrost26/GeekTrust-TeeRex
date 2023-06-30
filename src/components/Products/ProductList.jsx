import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import SearchBar from "../SearchBar";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useFilter } from "../../contexts/filter-context";
import { Dna } from "react-loader-spinner";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { state } = useFilter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getProductsByGender = (products, gender) => {
    if (gender === "Men" || gender === "Women") {
      return products.filter((product) => product.gender === gender);
    } else {
      return products;
    }
  };

  const getProductsByColor = (products, colors) => {
    const filteredProducts = products.filter(
      (product) => colors.length === 0 || colors.includes(product.color)
    );
    return filteredProducts;
  };

  const getProductsByType = (products, types) => {
    if (types.length === 0) {
      return products;
    } else {
      const filteredProducts = products.filter((product) =>
        types.includes(product.type)
      );
      return filteredProducts;
    }
  };

  const getProductsByPrice = (products, priceRanges) => {
    if (priceRanges.length === 0) {
      return products;
    } else {
      return products.filter((product) => {
        for (let priceRange of priceRanges) {
          const [minPrice, maxPrice] = priceRange.split("-");
          const productPrice = parseFloat(product.price);
          if (
            productPrice >= parseFloat(minPrice) &&
            productPrice <= parseFloat(maxPrice)
          ) {
            return true;
          }
        }
        return false;
      });
    }
  };

  const productsByColor = getProductsByColor(products, state.color);
  const productsByGender = getProductsByGender(productsByColor, state.gender);
  const productsByType = getProductsByType(productsByGender, state.type);
  const filteredProducts = getProductsByPrice(
    productsByType,
    state.price
  ).filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "75vw"
        }}
      >
        <Dna
          visible={true}
          height={180}
          width={180}
          ariaLabel="dna-loading"
          style={{ margin: "auto" }}
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      {filteredProducts.length > 0 ? (
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "flex-start",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            flexDirection: "column",
          }}
        >
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, mb: 2 }} />
          <Typography variant="h6" align="center" sx={{ width: "75vw" }}>
            No results found
          </Typography>
        </div>
      )}
    </>
  );
}

export default ProductList;
