import React from 'react';

function Textarea(props) {
  return (
    <div {...props} className={props.name}>
      <label className="form__label" htmlFor={props.name}>
        {props.label}{' '}
      </label>
      <textarea
        className="form__input"
        type={props.type}
        id={props.name}
        placeholder={props.label}
        required
        style={{ height: '200px' }}
      />
    </div>
  );
}
export default Textarea;
