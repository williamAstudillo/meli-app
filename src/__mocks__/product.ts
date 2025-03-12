import { Product } from "@src/modules/domain/product";

export const mockProduct: Product = {
  condition: "new",
  currency: "USD",
  free_shipping: false,
  id: "1",
  description: "This is a sample product description",
  picture: "/image.jpg",
  price: 1000,
  sold_quantity: 5,
  title: "Sample Product",
};
