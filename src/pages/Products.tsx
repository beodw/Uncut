import React from "react";
import data from "../../data.json";
import Card from "../components/widgets/Card";
import SortBy from "../components/widgets/SortBy";

function Products() {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-12">
        <h1 className="text-3xl">All Products</h1>
        <SortBy />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.items.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
      </div>
    </>
  );
}

export default Products;
