import ProductCard from "./ProductCard";

interface IData {
  products: IProducts[];
  total?: number;
  skip?: number;
  limit?: number;
}

interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const ProductCardField = (products: IData) => {
  const cardField = products.products.map((item) => {
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        category={item.category}
        brand={item.brand}
        price={item.price}
        discount={item.discountPercentage}
        rating={item.rating}
        stock={item.stock}
        background={item.thumbnail}
      />
    );
  });

  return <div className="product-card_field">{cardField}</div>;
};

export default ProductCardField;
