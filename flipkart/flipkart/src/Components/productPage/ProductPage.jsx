import React, { useContext } from "react";
import { currentProductDetails } from "../../App";

const ProductPage = () => {
  const context = useContext(currentProductDetails);
  return <>{console.log(context)}</>;
};

export default ProductPage;
