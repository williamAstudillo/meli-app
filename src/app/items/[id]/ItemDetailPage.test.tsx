import { render, screen, waitFor } from "@testing-library/react";
import ItemDetailPage from "@src/app/items/[id]/page";
import {
  getCategories,
  getProductDetail,
} from "../../../modules/aplication/getProducts";
import { mockProduct } from "@src/__mocks__/product";
import formatPrice from "@src/utils/formatPrice";

jest.mock("../../../modules/aplication/getProducts");
jest.mock("../../..//modules/infraestructure/getProductsRepository");

describe("ItemDetailPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render product details and breadcrumb", async () => {
    const mockCategories = ["Electronics", "Laptops"];
    const { integerPart } = formatPrice(mockProduct.price);
    (getProductDetail as jest.Mock).mockResolvedValue(mockProduct);
    (getCategories as jest.Mock).mockResolvedValue(mockCategories);

    render(await ItemDetailPage({ params: Promise.resolve({ id: "1" }) }));
    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(integerPart))).toBeInTheDocument();
      expect(screen.getByText(mockCategories[0] + " >")).toBeInTheDocument();
      expect(screen.getByText(mockCategories[1])).toBeInTheDocument();
    });
  });

  it("should handle missing product details gracefully", async () => {
    (getProductDetail as jest.Mock).mockResolvedValue(undefined);
    (getCategories as jest.Mock).mockResolvedValue([]);

    render(await ItemDetailPage({ params: Promise.resolve({ id: "1" }) }));

    await waitFor(() => {
      expect(screen.queryByText(mockProduct.title)).not.toBeInTheDocument();
      expect(
        screen.queryByText(`$${mockProduct.price}`)
      ).not.toBeInTheDocument();
    });
  });
});
