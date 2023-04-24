import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "../components/Dropdown";

describe("Dropdown", () => {
  test("should render and match snapshot", () => {
    const { container } = render(
      <Dropdown children={undefined} isOpen={false} />
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
