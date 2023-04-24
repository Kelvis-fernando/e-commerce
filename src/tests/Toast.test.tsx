import React from "react";
import { render } from "@testing-library/react";
import Toast from "../components/Toast";

describe("Toast", () => {
  test("should render and match snapshot", () => {
    const { container } = render(
      <Toast
        message={""}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
