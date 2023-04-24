import React from "react";
import { render } from "@testing-library/react";
import LoginModal from "../components/auth/LoginModal";

describe("LoginModal", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<LoginModal />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
