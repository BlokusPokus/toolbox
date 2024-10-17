import React from "react";

interface TextProps {
  id?: string;
  type?: string;
  className?: string;
  name?: string;
  readOnly?: boolean;
  noClass?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  pattern?: string;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Text: React.FC<TextProps> = ({
  id = "",
  type = "text",
  className = "form-control",
  name = "",
  readOnly = false,
  noClass = false,
  value,
  placeholder = "Input",
  disabled = false,
  reference,
  pattern,
  onKeyPress,
  onChange,
  onBlur
}) => {
  return (
    <input
      id={id}
      type={type}
      className={noClass ? "" : className}
      name={name}
      value={value ?? undefined}
      placeholder={placeholder}
      disabled={disabled}
      ref={reference}
      pattern={pattern}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
  );
};

export default Text;