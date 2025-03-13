import { render, screen } from "@testing-library/react";
import Home from "@src/app/page";
import useGetProducts from "@src/hooks/useGetProducts";
import useStore from "@src/store/useStore";
import { mockProduct } from "@src/__mocks__/product";
import formatPrice from "@src/utils/formatPrice";

jest.mock("../hooks/useGetProducts");
jest.mock("../store/useStore");

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render breadcrumb component", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({ query: "" });
    (useGetProducts as jest.Mock).mockReturnValue([]);
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render product cards when products exist", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({ query: "laptop" });
    (useGetProducts as jest.Mock).mockReturnValue([mockProduct]);
    const { integerPart } = formatPrice(mockProduct.price);
    render(<Home />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$ ${integerPart}`)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `/items/${mockProduct.id}`
    );
  });

  it("should not render product cards when no products exist", () => {
    (useStore as unknown as jest.Mock).mockReturnValue({ query: "unknown" });
    (useGetProducts as jest.Mock).mockReturnValue([]);

    render(<Home />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
