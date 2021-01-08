import React from "react";

import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import { productData, productData2 } from "./components/Products/data";
import MoreProducts from "./components/MoreProducts/MoreProducts";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Main />
      <Products heading="Here are our top Steaks" data={productData} />
      <MoreProducts />
      <Products heading="Here is the Dessert" data={productData2} />
      <Footer />
    </div>
  );
};

export default App;
