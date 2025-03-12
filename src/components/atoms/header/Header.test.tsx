import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import useStore from "../../../store/useStore";

jest.mock("../../../store/useStore");

const mockUseStore = useStore as unknown as jest.Mock;

mockUseStore.mockReturnValue({
  categories: ["Electronics", "Cell Phones", "Smartphones"],
});
const push = jest.fn();
jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push,
    }),
  };
});

describe("Header", () => {
  it("renders the header component", () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText("Nunca dejes de buscar")
    ).toBeInTheDocument();
  });

  it("navigates to home when logo is clicked", () => {
    render(<Header />);
    fireEvent.click(screen.getByAltText("Logo Mercado libre"));
    expect(push).toHaveBeenCalledWith("/");
  });

  it("updates query state on input change", () => {
    render(<Header />);
    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(input, { target: { value: "test query" } });
    expect(input).toHaveValue("test query");
  });
});
