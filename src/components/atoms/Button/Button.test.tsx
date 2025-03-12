import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders the button with the provided text", () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
