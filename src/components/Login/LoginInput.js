import React, {PropTypes} from "react";

const LoginInput = ({type, placeholder, icon, value, onChange}) => {
  return (
    <div className="input">
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} required />
      <span>
        <i className={`fa ${icon}`}></i>
      </span>
    </div>
  );
};

LoginInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default LoginInput;