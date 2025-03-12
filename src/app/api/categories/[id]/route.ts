import { NextRequest } from "next/server";
import { CategoriesResponse } from "../../types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  let responseApiCategories;
  try {
    responseApiCategories = await fetch(
      process.env.API_MELI + `/categories/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}` || "",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  const categories =
    (await responseApiCategories?.json()) as CategoriesResponse;

  const responseApi = {
    categories: categories.path_from_root.map((category) => category.name),
  };

  return Response.json(responseApi);
}
