"use client";
import BreadCrumb from "@src/components/atoms/breadCrumb/BreadCrumb";
import Card from "@src/components/atoms/card/Card";
import useGetProducts from "@src/hooks/useGetProducts";
import useStore from "@src/store/useStore";

export default function Home() {
  const { query } = useStore();
  const products = useGetProducts(query);
  return (
    <>
      {products.length > 0 ? (
        <>
          <BreadCrumb categories={[]} />
          <ol>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </ol>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
