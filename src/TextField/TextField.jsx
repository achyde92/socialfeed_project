import React from "react";

const TextField = ({ label, value, onChange }) => (
  <div>
    <label>
      {label}:
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default TextField;