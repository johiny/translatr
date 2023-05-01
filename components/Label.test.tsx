import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Label from "./Label";

describe("[ components / Label ]", () => {
  it("should render", () => {
    const { asFragment } = render(<Label count={0} maxCount={10} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
