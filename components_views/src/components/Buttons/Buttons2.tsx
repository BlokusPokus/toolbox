import React from "react";
import PropTypes from "prop-types";

const Button2 = (props: { children?: any; id?: any; type?: any; className?: any; value?: any; onClick?: any; style?: any; disabled?: any; }) => {
  const { id, type, className, value, onClick, style, disabled } = props;
  return (
    <button
      id={id ? id : ""}
      type={type ? type : "button"}
      className={className ? "btn " + className : "btn"}
      onClick={onClick ? onClick : null}
      style={style || null}
      value={value || null}
      disabled={disabled ? true : false}
    >
      {props.children}
    </button>
  );
};

Button2.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default Button2;