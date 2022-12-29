export interface IProductInCart {
  id: number;
  count: number;
  price: number;
}

export interface IPropsForProductInCart {
  product: IProductData;
  cart: IProductInCart[];
  i: number
}

export interface IProductData {
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

export interface IProductInfoFromLocalStorage {
  id: number;
  count: number;
  price: number
}
