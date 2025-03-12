interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  categoryId: string;
}

export interface ApiResponse {
  author: Author;
  categories: { name: string }[];
  items: Item[];
}

export interface ItemDetail extends Item {
  sold_quantity: number;
  description: string;
}

export interface ApiResponseDetail {
  author: Author;
  item: ItemDetail;
}
