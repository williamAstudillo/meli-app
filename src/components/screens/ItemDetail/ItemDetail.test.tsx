import { render, screen } from "@testing-library/react";
import ItemDetail from "./ItemDetail";
import formatPrice from "@src/utils/formatPrice";
import { mockProduct } from "@src/__mocks__/product";

describe("ItemDetail component", () => {
  test("renders the product details correctly", () => {
    render(<ItemDetail productDetail={mockProduct} />);
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("Nuevo - 5 vendidos")).toBeInTheDocument();
    expect(
      screen.getByText("This is a sample product description")
    ).toBeInTheDocument();
    expect(screen.getByText("Comprar")).toBeInTheDocument();
  });

  test("renders formatted price correctly", () => {
    render(<ItemDetail productDetail={mockProduct} />);
    const { integerPart, cents } = formatPrice(mockProduct.price);
    expect(screen.getByText(`$${integerPart}`)).toBeInTheDocument();
    expect(screen.getByText(cents)).toBeInTheDocument();
  });
});
