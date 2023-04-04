import React from "react";
import Card from "../components/widgets/Card";
import SortBy from "../components/widgets/SortBy";
import { useSelector } from "react-redux";
import { appState } from "../redux/store";

const Products = () => {
  const products: Array<Object> = useSelector(
    (state: appState) => state.appSlice.products
  );

  return (
    <>
      <div className="flex items-center justify-between w-full mb-12">
        <h1 className="text-3xl">All Products</h1>
        <SortBy />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.length !== 0 ? (
          products.map((item, idx) => (
            <Card key={idx} item={item} index={idx} />
          ))
        ) : (
          <h2>No Products</h2>
        )}
      </div>
    </>
  );
};

export default Products;
