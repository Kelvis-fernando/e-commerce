import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "../components/products/ProductCard";

describe("ProductCard", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<ProductCard />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
