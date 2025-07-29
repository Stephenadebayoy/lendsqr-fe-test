/** @format */
// src/components/Button.tsx
import type { ButtonProps } from "../../types/types";
import "./button.scss";

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => (
  <button
    className="custom-button"
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
