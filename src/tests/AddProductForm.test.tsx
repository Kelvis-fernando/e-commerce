import React from "react";
import { render } from "@testing-library/react";
import AddProductForm from "../components/producer/AddProductForm";

describe("AddProductForm", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<AddProductForm />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
