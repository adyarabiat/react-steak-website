import React from "react";

import { MoreProductsContainer, MoreProductsBtn } from "./MoreProductsElements";

const MoreProducts = () => {
  return (
    <MoreProductsContainer>
      <h1>Our Steak for Today</h1>
      <p>It is a grilled steak with mushroom sauce and mash potato</p>
      <MoreProductsBtn>Order Now</MoreProductsBtn>
    </MoreProductsContainer>
  );
};

export default MoreProducts;
