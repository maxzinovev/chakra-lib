import React from 'react';
import { Input } from '../Input';

export const InputForm = React.forwardRef((
    {
        field,
        form,
        sizeInput,
        label = null,
        ...props
    }, ref) => {
    return (
        <Input
            name={field.name}
            label={label}
            isInvalid={form.errors[field.name] && form.touched[field.name]}
            {...field}
            {...props}
        />
    );
});
