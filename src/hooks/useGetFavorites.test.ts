import { renderHook, waitFor } from "@testing-library/react";
import useGetFavorites from "./useGetFavorites";
import { getFavorites } from "@src/modules/aplication/handleFavorites";
import { mockProduct } from "@src/__mocks__/product";

jest.mock("../modules/aplication/handleFavorites");
jest.mock("../modules/infraestructure/handleFavoritesRepository");

const mockGetFavorites = getFavorites as jest.Mock;
mockGetFavorites.mockResolvedValue([mockProduct]);

describe("useGetFavorites Hook", () => {
  it("should fetch and return the list of favorites", async () => {
    const { result } = renderHook(() => useGetFavorites());

    await waitFor(() => {
      expect(result.current.favorites).toEqual([mockProduct]);
    });
  });
});
