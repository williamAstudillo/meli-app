import { render, screen } from "@testing-library/react";
import Home from "@src/app/page";

describe("Home Component", () => {
  it("should render component with message", () => {
    render(<Home />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
