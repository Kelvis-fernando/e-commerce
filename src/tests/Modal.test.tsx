import React from "react";
import { render } from "@testing-library/react";
import Modal from "../components/layout/Modal";

describe("Modal", () => {
  test("should render and match snapshot", () => {
    const { container } = render(<Modal isOpen={false} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
