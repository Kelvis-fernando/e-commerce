import React from "react";
import { render } from "@testing-library/react";
import RegisterModal from "../components/auth/RegisterModal";

describe("RegisterModal", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<RegisterModal />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
