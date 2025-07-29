/** @format */

import type { InputProps } from "../../types/types";
import "./Input.scss";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  id = "input-id",
  className,
}: InputProps & { id?: string }) => (
  <div className="input-group">
    {label && (
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
    )}
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`custom-input ${className} `}
    />
  </div>
);

export default Input;
