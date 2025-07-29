/** @format */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

describe("Button component", () => {
  it("renders with given text", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button text="Can't click" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("has correct type attribute", () => {
    render(<Button text="Submit" type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
