import React from "react";
import { render } from "@testing-library/react";
import Avatar from "../components/Avatar";

describe("Avatar", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<Avatar name={""} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
