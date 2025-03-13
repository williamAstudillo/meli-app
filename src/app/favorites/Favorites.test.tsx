import { render, screen } from "@testing-library/react";
import FavoritesPage from "./page";
import useGetFavorites from "../../hooks/useGetFavorites";
import { mockProduct } from "@src/__mocks__/product";
import formatPrice from "@src/utils/formatPrice";

jest.mock("../../hooks/useGetFavorites");

const mockUseGetFavorites = useGetFavorites as jest.Mock;

mockUseGetFavorites.mockReturnValue({
  favorites: [mockProduct],
});

describe("FavoritesPage Component", () => {
  it("should render the list of favorites", () => {
    const { integerPart } = formatPrice(mockProduct.price);
    render(<FavoritesPage />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(integerPart))).toBeInTheDocument();
  });
});
