import fs from "fs";
import path from "path";
import { Product } from "../../types";

export async function GET() {
  const filePath = path.join(process.cwd(), "favorites.json");
  let favorites: Product[] = [];
  if (fs.existsSync(filePath)) {
    favorites = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  return new Response(JSON.stringify(favorites), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
