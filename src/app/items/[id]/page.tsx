import {
  getCategories,
  getProductDetail,
} from "@src/modules/aplication/getProducts";
import ItemDetail from "@src/components/screens/ItemDetail/ItemDetail";
import { getProductsRepository } from "@src/modules/infraestructure/getProductsRepository";
import BreadCrumb from "@src/components/atoms/breadCrumb/BreadCrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetail = await getProductDetail(getProductsRepository(), id);
  return {
    title: productDetail?.title,
    description: productDetail?.title,
    image: productDetail?.picture,
    openGraph: {
      title: productDetail?.title,
      description: productDetail?.title,
      image: productDetail?.picture,
      type: "website",
      url: `https://localhost:3000/items/${id}`,
    },
  };
}

const ItemDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const productDetail = await getProductDetail(getProductsRepository(), id);
  const categories = await getCategories(
    getProductsRepository(),
    productDetail?.categoryId || ""
  );
  return (
    <>
      {productDetail && (
        <>
          <BreadCrumb categories={categories || []} />
          <ItemDetail productDetail={productDetail} />
        </>
      )}
    </>
  );
};

export default ItemDetailPage;
