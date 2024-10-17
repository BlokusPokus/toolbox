import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        {...props}
        className={`form-input ${error ? 'error' : ''} ${className || ''}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;