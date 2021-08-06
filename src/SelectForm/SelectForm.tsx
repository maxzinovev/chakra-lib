import React from 'react';
import { Select } from '../Select';

export const SelectForm = React.forwardRef((
  {
    field,
    form,
    options,
    isMulti = false,
    ...props }
  , ref) => {
  const onChange = option => {
    if (option) {
      form.setFieldValue(field.name, isMulti ? option.map(item => item.value) : option.value);
    } else {
      form.setFieldValue(field.name, '');
    }
  };
  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };
  return (
    <Select
      name={field.name}
      value={getValue()}
      onChange={onChange}
      options={options}
      isMulti={isMulti}
      isInvalid={form.errors[field.name] && form.touched[field.name]}
      {...props}
    />
  )
});
