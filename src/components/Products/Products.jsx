import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  Product,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = (props) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{props.heading}</ProductsHeading>
      <Product>
        {props.data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Product>
    </ProductsContainer>
  );
};

export default Products;
