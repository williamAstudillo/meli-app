import { Product, ProductData } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";
import axiosInstance from "./axios/axios";
import { ApiResponse, ApiResponseDetail } from "./interfaces/productsApi";

export function getProductsRepository(): ProductRepository {
  return {
    getProducts,
    getProductDetail,
    getCategories,
  };
}

const getProducts = async (query: string): Promise<ProductData> => {
  const response = await axiosInstance.get<ApiResponse>("/items?q=" + query);
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

const getProductDetail = async (id: string): Promise<Product | undefined> => {
  let formatResponse;
  try {
    const response = await axiosInstance.get<ApiResponseDetail>(`/items/${id}`);
    formatResponse = {
      condition: response.data.item.condition,
      currency: response.data.item.price.currency,
      free_shipping: response.data.item.free_shipping,
      id: response.data.item.id,
      picture: response.data.item.picture,
      price: response.data.item.price.amount,
      title: response.data.item.title,
      description: response.data.item.description,
      sold_quantity: response.data.item.sold_quantity,
      categoryId: response.data.item.categoryId,
    };
    return formatResponse;
  } catch (error) {
    console.error(error);
  }
};

const getCategories = async (id: string): Promise<string[] | undefined> => {
  try {
    const response = await axiosInstance.get<{ categories: string[] }>(
      `/categories/${id}`
    );
    return response.data.categories;
  } catch (error) {
    console.error(error);
  }
};
