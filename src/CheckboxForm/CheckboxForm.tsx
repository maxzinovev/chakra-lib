import React from 'react';
import { Checkbox, FormControl } from '@chakra-ui/react';

export const CheckboxForm = React.forwardRef((
  {
    field,
    form,
    label,
    ...props
  }) => {
  const handleCheckbox = e => form.setFieldValue(field.name, e.target.checked);
  return (
    <FormControl>
      <Checkbox isChecked={form.values[field.name] || false} onChange={handleCheckbox}>
        {label}
      </Checkbox>
    </FormControl>
  );
});
