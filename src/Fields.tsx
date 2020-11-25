import React from "react";

type Props = {
  name: string;
  label: string;
  value: number;
  handleChange: (number: number) => void;
};

export const InputField = ({ name, value, handleChange, label }: Props) => (
  <label htmlFor={name}>
    {label}
    <input
      type="number"
      name={name}
      value={value}
      onChange={({ target }) => handleChange(parseInt(target.value, 10))}
    />
  </label>
);
