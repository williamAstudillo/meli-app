import { renderHook, act } from "@testing-library/react";
import useGetProducts from "@src/hooks/useGetProducts";
import { getProducts } from "@src/modules/aplication/getProducts";
import { mockProduct } from "@src/__mocks__/product";

jest.mock("../modules/aplication/getProducts", () => ({
  getProducts: jest.fn(),
}));

jest.mock("../modules/infraestructure/getProductsRepository", () => ({
  getProductsRepository: jest.fn(),
}));

describe("useGetProducts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should fetch and set products", async () => {
    const mockResponse = {
      products: [mockProduct],
      categories: ["Electronics"],
    };
    (getProducts as jest.Mock).mockResolvedValue(mockResponse);

    const { result, rerender } = renderHook(
      ({ query }) => useGetProducts(query),
      {
        initialProps: { query: "laptop" },
      }
    );

    await act(async () => {
      rerender({ query: "laptop" });
    });
    expect(result.current).toEqual([mockProduct]);
  });

  it("should handle empty product list", async () => {
    (getProducts as jest.Mock).mockResolvedValue({
      products: [],
      categories: [],
    });

    const { result, rerender } = renderHook(
      ({ query }) => useGetProducts(query),
      {
        initialProps: { query: "unknown" },
      }
    );
    await act(async () => {
      rerender({ query: "unknown" });
    });

    expect(result.current).toEqual([]);
  });
});
