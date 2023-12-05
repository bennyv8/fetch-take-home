import React from "react";

interface InputProps {
  type: string;
  id: string;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
}

const Input = (props: InputProps) => {
  const {
    id,
    className = "",
    onChange = () => null,
    type = "text",
    value = "",
    placeholder = "",
    required = false,
  } = props;

  return (
    <input
      id={id}
      className={className}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
