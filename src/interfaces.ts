export interface IProductInCart {
  id: number;
  count: number;
  price: number;
}

export interface IPropsForProductInCart {
  product: IProductData;
  cart: IProductInCart[];
  i: number;
}

// export interface IProductData {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

export interface IProductData {
  [key: string]: number | string | string[];
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
  price: number;
}

export interface IObject {
  [key: string]: number;
}

export enum ActiveMode {
  big = "big",
  small = "small",
}

export enum Options {
  priceASC = "price-ASC",
  priceDESC = "price-DESC",
  ratingASC = "rating-ASC",
  ratingDESC = "rating-DESC",
  sortOptions = "sort-options",
}

export interface IPromocode {
  id: string,
  name: string,
  disc: number
}
