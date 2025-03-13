import { render, screen } from "@testing-library/react";
import Card from "./Card";
import formatPrice from "@src/utils/formatPrice";
import { mockProduct } from "@src/__mocks__/product";

describe("Card component", () => {
  test("renders the Card component with title and price", () => {
    render(<Card product={mockProduct} />);
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(
      screen.getByText(`$ ${formatPrice(mockProduct.price).integerPart}`)
    ).toBeInTheDocument();
  });
});
