import React from "react";

interface RadioProps {
  id?: string;
  type?: "radio";
  className?: string;
  name?: string;
  autoFocus?: boolean;
  required?: boolean;
  defaultChecked?: boolean;
  readOnly?: boolean;
  noClass?: boolean;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  reference?: React.RefObject<HTMLInputElement>;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
  id = "",
  type = "radio",
  className = "form-control",
  name = "",
  autoFocus = false,
  required = false,
  defaultChecked = false,
  readOnly = false,
  noClass = false,
  value,
  checked,
  disabled = false,
  reference,
  onKeyPress,
  onChange,
  onBlur
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      autoFocus={autoFocus}
      required={required}
      defaultChecked={defaultChecked}
      className={noClass ? "" : className}
      value={value ?? undefined}
      checked={checked}
      disabled={disabled}
      ref={reference}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
    />
  );
};

export default Radio;

