import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productdata")
      .then((response) => {
        setProducts(response.data); // Store fetched data
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 relative">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
        />
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg bg-white relative flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                {product.name}
              </h3>
              <p className="text-sm text-yellow-500 mt-2">
                Price: ${product.price}
              </p>
              <p className="text-sm text-red-600">Ratings: {product.ratings}</p>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover mt-4 rounded-md"
            />
            <button className="absolute right-2 top-2 text-red-500 p-2 rounded-full bg-yellow-400 group transition-all duration-500 ease-in-out w-10 hover:w-36 sm:hover:w-40">
              <span className="group-hover:hidden">➕</span>
              <span className="hidden group-hover:inline-block ml-2 font-semibold transition-opacity duration-500 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Add To Cart
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
