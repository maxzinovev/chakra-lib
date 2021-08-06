import React, { useEffect, useState } from 'react';
import { FormControl, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';
import { FormLabel } from '../FormLabel';

export const InputSearch = (
  {
    onChange = null,
    defaultValue = '',
    value = '',
    placeholder,
    label,
    name = 'search',
    hideIcon = false,
    ...props
  }) => {
  const [text, setText] = useState(defaultValue ? defaultValue : value);
  const [valueDebounce] = useDebounce(text, 700);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
   if (value !== valueDebounce) {
     onChange && onChange(valueDebounce);
   }
  }, [valueDebounce]);

  useEffect(() => {
    if (value !== text) {
      setText(value);
    }
  }, [value])

  return (
    <FormControl>
      {label && (
        <FormLabel name={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup width="100%">
        <InputRightElement>
          {text ? (
            <Icon as={SmallCloseIcon} color="gray.600" onClick={() => setText('')} />
          ) : (
            !hideIcon && (
              <Icon as={Search2Icon} color="gray.300" />
            )
          )}
        </InputRightElement>
        <Input
          id={name}
          value={text || ''}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={placeholder}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
};
