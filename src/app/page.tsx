"use client";
import BreadCrumb from "@src/components/atoms/breadCrumb/BreadCrumb";
import Card from "@src/components/atoms/card/Card";
import useGetProducts from "@src/hooks/useGetProducts";
import useStore from "@src/store/useStore";
import Link from "next/link";

export default function Home() {
  const { query } = useStore();
  const products = useGetProducts(query);
  return (
    <>
      <BreadCrumb categories={[]} />
      {products.map((product) => (
        <Link href={`/items/${product.id}`} key={product.id}>
          <Card
            key={product.id}
            price={product.price}
            title={product.title}
            url={product.picture}
          />
        </Link>
      ))}
    </>
  );
}
