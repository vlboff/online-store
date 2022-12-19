import ProductCardField from "./components/ProductCardField";
import "./styles/main.scss";
import data from "./data/data.json";

const products = data.products;

function App() {
  return <ProductCardField products={products} />;
}

export default App;
