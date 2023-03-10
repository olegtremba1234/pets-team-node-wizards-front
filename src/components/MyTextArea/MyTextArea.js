import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Label, Textarea } from './MyTextArea.styled';

export default function MyTextArea({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div style={{ position: 'relative' }}>
      <Label htmlFor={field.name}>
        {label}
        <Textarea {...field} {...props} autoComplete="off" />
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
