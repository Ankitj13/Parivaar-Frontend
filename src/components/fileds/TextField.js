import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
        <label htmlFor={field.name}>{label}</label>
            <input  className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} autoComplete="off"
            {...field}{...props}
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}
