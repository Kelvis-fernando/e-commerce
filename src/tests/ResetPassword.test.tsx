import React from "react";
import { render } from "@testing-library/react";
import ResetPassword from "../components/auth/ResetPassword";

describe("ResetPassword", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<ResetPassword />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
