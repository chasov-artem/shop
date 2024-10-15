import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-center underline mb-4 text-5xl">
        Products
      </h2>
      <ul className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Products;
