import React from "react";
import { render } from "@testing-library/react";
import ForgotPasswordModal from "../components/auth/ForgotPasswordModal";

describe("ForgotPasswordModal", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<ForgotPasswordModal />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
