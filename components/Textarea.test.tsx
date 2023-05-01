import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Textarea, { TextareaProps } from "./Textarea";

const defaultProps: TextareaProps = {
  placeholder: "placeholder",
  value: "value",
  onChange: () => {},
  readOnly: true,
};

describe("[ components / Textarea ]", () => {
  it("should render", () => {
    const { asFragment } = render(<Textarea {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("when the value is changed", () => {
    it("should call onChange", () => {
      // Arrange
      const props = {
        onChange: vi.fn(),
        placeholder: "placeholder to change",
      };

      // Act
      render(<Textarea {...defaultProps} {...props} />);

      fireEvent.change(screen.getByPlaceholderText("placeholder to change"), {
        target: { value: "new value" },
      });

      // Assert
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
