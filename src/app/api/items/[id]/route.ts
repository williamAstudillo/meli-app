import { ProductResponseDetail } from "@app/api/types";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  let responseApiDetail;
  let responseApiDescription;
  try {
    responseApiDetail = await fetch(process.env.API_MELI + `/items/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}` || "",
      },
    });
    responseApiDescription = await fetch(
      process.env.API_MELI + `/items/${id}/description`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}` || "",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
  const product = (await responseApiDetail?.json()) as ProductResponseDetail;

  const description = (await responseApiDescription?.json()) as {
    plain_text: string;
  };

  const item = {
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
    sold_quantity: product.initial_quantity,
    description: description.plain_text,
  };

  const responseApi = {
    autor: {
      name: "William",
      lastname: "Astudillo",
    },
    item,
  };
  return Response.json(responseApi);
}
