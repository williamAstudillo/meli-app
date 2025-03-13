interface Shipping {
  free_shipping: boolean;
}

export interface ProductResponse {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  shipping: Shipping;
  category_id: string;
}
export interface ProductResponseDetail extends ProductResponse {
  initial_quantity: number;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface FilterValue {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

interface category {
  id: string;
  name: string;
}
export interface CategoriesResponse {
  path_from_root: category[];
}

export interface Product {
  condition: string;
  currency: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: number;
  title: string;
  description?: string;
  sold_quantity?: number;
  categoryId?: string;
}
