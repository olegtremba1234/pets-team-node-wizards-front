import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Input, Label } from './MyTextInput.styled';

export default function MyTextInput({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div style={{ position: 'relative' }}>
      <Label htmlFor={field.name}>
        {label}
        <Input {...field} {...props} autoComplete="off" />
      </Label>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{
          color: '#F59256',
          fontSize: '12px',
          position: 'absolute',
          bottom: '-16px',
          left: '16px',
        }}
      />
    </div>
  );
}
