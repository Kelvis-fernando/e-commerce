import React from "react";
import { render } from "@testing-library/react";
import Badge from "../components/layout/Badge";

describe("Badge", () => {
  test("should render and match snapshot", () => {
    const { container } = render(
      <Badge items={0}>
        <p>test</p>
      </Badge>
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
