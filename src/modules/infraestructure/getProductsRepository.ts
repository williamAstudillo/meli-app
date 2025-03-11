import { ProductData } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";
import axiosInstance from "./axios/axios";
import { ApiResponse } from "./interfaces/productsApi";

export function getProductsRepository(): ProductRepository {
  return {
    getProducts,
  };
}

const getProducts = async (query: string): Promise<ProductData> => {
  const response = await axiosInstance.get<ApiResponse>("?q=" + query);
  const formatResponse = response.data.items.map((product) => {
    return {
      condition: product.condition,
      currency: product.price.currency,
      free_shipping: product.free_shipping,
      id: product.id,
      picture: product.picture,
      price: product.price.amount,
      title: product.title,
    };
  });
  return {
    products: formatResponse,
    categories: response.data.categories.map((category) => category.name),
  };
};
