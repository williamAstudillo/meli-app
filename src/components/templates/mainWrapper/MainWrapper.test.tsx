import { render, screen } from "@testing-library/react";
import MainWrapper from "./MainWrapper";

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
  };
});

describe("MainWrapper component", () => {
  test("renders the Header component", () => {
    render(
      <MainWrapper>
        <div>Test Content</div>
      </MainWrapper>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(
      <MainWrapper>
        <div>Test Content</div>
      </MainWrapper>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
