import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/layout/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("should render and match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
