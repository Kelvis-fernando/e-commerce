import React from "react";
import { render } from "@testing-library/react";
import Carrossel from "../components/Carrossel";

describe("Carrossel", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<Carrossel images={[]} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
