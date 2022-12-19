import SortProducts from "./SortProducts";
import ProductCardField from "./ProductCardField";
import data from "../data/data.json";

const products = data.products;

const Products = () => {
  return (
    <div className="products">
      <SortProducts amount={100} />
      <ProductCardField products={products} />
    </div>
  );
};

export default Products;
