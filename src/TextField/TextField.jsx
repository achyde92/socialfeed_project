import React from "react";

const TextField = ({ label, value, onChange }) => (
  <div className="text-field">
    <label>
      {label}:
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default TextField;