import React from "react";
import { render } from "@testing-library/react";
import ProductExpandedModal from "../components/products/ProductExpandedModal";

describe("ProductExpandedModal", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<ProductExpandedModal />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
