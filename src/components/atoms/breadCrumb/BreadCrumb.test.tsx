import { render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";
import useStore from "../../../store/useStore";

jest.mock("../../../store/useStore");

const mockUseStore = useStore as unknown as jest.Mock;

mockUseStore.mockReturnValue({
  categories: ["Electronics", "Cell Phones", "Smartphones"],
});

describe("BreadCrumb Component", () => {
  it("should render categories passed as props", () => {
    const categories = ["Sports", "Soccer", "Balls"];
    render(<BreadCrumb categories={categories} />);
    expect(screen.getByText("Sports >")).toBeInTheDocument();
    expect(screen.getByText("Soccer >")).toBeInTheDocument();
    expect(screen.getByText("Balls")).toBeInTheDocument();
  });

  it("should render categories from the store if no props are passed", () => {
    render(<BreadCrumb categories={[]} />);

    expect(screen.getByText("Electronics >")).toBeInTheDocument();
    expect(screen.getByText("Cell Phones >")).toBeInTheDocument();
    expect(screen.getByText("Smartphones")).toBeInTheDocument();
  });
});
