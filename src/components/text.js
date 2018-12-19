import React from 'react';
export const Text = ({ label, input, meta }) => {
 
  let isValidationError = meta.touched && meta.error;
  return (
    <div className={ isValidationError ? "input-group error" : "input-group"}>
        <input  {...input} placeholder={label} type="text" />
        { isValidationError && <span className="error-msg">{meta.error}</span> }
    </div>
  );
}
export default Text;