import React from "react";
import { render } from "@testing-library/react";
import EditProductForm from "../components/producer/EditProductForm";

describe("EditProductForm", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<EditProductForm />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
