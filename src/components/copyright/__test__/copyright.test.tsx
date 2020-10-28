import React from "react";
import { render, cleanup } from "@testing-library/react";
import {default as Copyright} from "../index";

afterEach(cleanup);

describe("Copyright components", () => {
  test("<Copyright> render", async () => {
    const { asFragment } = render(<Copyright> testing </Copyright>);
    expect(asFragment).toMatchSnapshot();
  });
});
