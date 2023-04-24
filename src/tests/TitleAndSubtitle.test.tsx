import React from "react";
import { render } from "@testing-library/react";
import TitleAndSubtitle from "../components/layout/TitleAndSubtitle";

describe("TitleAndSubtitle", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<TitleAndSubtitle title={""} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
