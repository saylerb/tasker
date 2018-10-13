import React from "react";
import HelloWorld from "./HelloWorld";
import { render } from "react-testing-library";

describe("hello world", () => {
  test("we can print hello world", () => {
    const { getByTestId } = render(<HelloWorld />);
  });
});
