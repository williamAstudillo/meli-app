import fs from "fs";
import path from "path";
import { Product } from "../../types";

export async function POST(request: Request) {
  const filePath = path.join(process.cwd(), "favorites.json");

  let favorites: Product[] = [];
  if (fs.existsSync(filePath)) {
    favorites = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  function saveFavorites() {
    fs.writeFileSync(filePath, JSON.stringify(favorites), "utf-8");
  }
  const body = await request.json();
  const { product } = body;

  const id = product.id;
  const index = favorites.findIndex((favorite) => favorite?.id === id);
  if (index === -1) {
    favorites.push(product);
    saveFavorites();
  }
  return new Response(JSON.stringify(favorites), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
