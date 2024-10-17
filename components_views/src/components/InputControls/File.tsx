import React from "react";

interface FileProps {
  id?: string;
  type?: string;
  className?: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
  noClass?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  reference?: React.RefObject<HTMLInputElement>;
  required?: boolean;
}

const File: React.FC<FileProps> = ({
  id = "",
  type = "file",
  className = "form-control",
  name = "",
  accept = "",
  multiple = false,
  noClass = false,
  onChange,
  onClick,
  reference,
  required = false,
}) => {
  return (
    <input
      id={id}
      type={type}
      className={noClass ? "" : className}
      name={name}
      accept={accept}
      ref={reference}
      required={required}
      multiple={multiple}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default File;