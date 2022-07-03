import React from "react";

interface Props {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
/** Component properties  to Input*/
const Input = ({ name, label, onChange }: Props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          {label}
        </label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          value={name}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
