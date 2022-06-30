import React from 'react';

function Input(props) {
  return (
    <div {...props} className={props.name}>
      <label className="form__label" htmlFor={props.name}>
        {props.label}{' '}
      </label>
      <input
        className="form__input"
        type={props.type}
        id={props.name}
        placeholder={props.label}
        required
      />
    </div>
  );
}
export default Input;
