import React from "react";
import { render } from "@testing-library/react";
import Loading from "../components/layout/Loading";

describe("Loading", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<Loading />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
