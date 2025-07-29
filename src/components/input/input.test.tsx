/** @format */

import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input component", () => {
  it("renders with label and placeholder", () => {
    render(
      <Input
        label="Username"
        placeholder="Enter username"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("calls onChange when user types", () => {
    const handleChange = jest.fn();

    render(
      <Input
        label="Email"
        placeholder="Enter email"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText("Enter email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
