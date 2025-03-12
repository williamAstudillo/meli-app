"use client";
import { getProducts } from "@src/modules/aplication/getProducts";
import { Product } from "@src/modules/domain/product";
import { getProductsRepository } from "@src/modules/infraestructure/getProductsRepository";
import { useEffect, useState } from "react";
import useStore from "@src/store/useStore";

const useGetProducts = (query: string) => {
  const { addCategories } = useStore();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (query) fetchProducts();
    else {
      setProducts([]);
      addCategories([]);
    }
  }, [query]);

  const fetchProducts = async () => {
    const response = await getProducts(getProductsRepository(), query);
    if (response) {
      setProducts(response.products);
      addCategories(response.categories);
    } else {
      setProducts([]);
      addCategories([]);
    }
  };

  return products;
};

export default useGetProducts;
