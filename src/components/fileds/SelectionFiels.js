import React from "react";
import Select from "react-select";
import { ErrorMessage, useField } from "formik";

export const SelectionFiels = ({
  onChange,
  options,
  value,
  className,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  const defaultValue = (options, value) => {
    return options ? options.find((options) => options.value === value) : "";
  };
  return (
      <>
      <label htmlFor={field.name}>{label}</label>
      <Select
       className={`${meta.touched && meta.error && 'is-invalid'}`} autoComplete="off"
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
      />

      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
};
