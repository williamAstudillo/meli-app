import { render, screen } from "@testing-library/react";
import Card from "./Card";
import formatPrice from "@src/utils/formatPrice";

describe("Card component", () => {
  const mockProps = {
    url: "/image.jpg",
    title: "Sample Product",
    price: 1000,
  };

  test("renders the Card component with title and price", () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(
      screen.getByText(`$ ${formatPrice(mockProps.price).integerPart}`)
    ).toBeInTheDocument();
  });
});
