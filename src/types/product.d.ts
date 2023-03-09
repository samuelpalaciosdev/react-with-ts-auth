export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: string[];
  inventory: number;
  averageRating: number;
  featured: boolean;
  inStock: boolean;
  brandId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

export type GetAllProducts = {
  products: Product[];
  count: number;
};

export type GetSingleProduct = {
  product: Product;
};
