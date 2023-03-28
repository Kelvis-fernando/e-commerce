import React from "react";
import { render } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart", () => {
  test("should render and match snapshot", () => {
    const { container } = render(
      <Cart
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
