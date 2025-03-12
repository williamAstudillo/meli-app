import { NextRequest } from "next/server";
import { Filter, ProductResponse } from "../types";

export async function GET(request: NextRequest) {
  let response;
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");
    response = await fetch(
      process.env.API_MELI + `/sites/MLA/search?q=${query}&limit=${5}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}` || "",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  const data = (await response?.json()) as {
    results: ProductResponse[];
    filters: Filter[];
  };

  const categories = data.filters[0].values[0].path_from_root.map((filter) => {
    return {
      name: filter.name,
    };
  });

  const items = data.results.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: product.price,
        decimals: 0,
      },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      categoryId: product.category_id,
    };
  });

  const responseApi = {
    autor: {
      name: "William",
      lastname: "Astudillo",
    },
    categories,
    items,
  };
  return Response.json(responseApi);
}
