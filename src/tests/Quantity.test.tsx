import React from "react";
import { render } from "@testing-library/react";
import Quantity from "../components/layout/Quantity";

describe("Quantity", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<Quantity />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
