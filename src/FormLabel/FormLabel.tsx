import React from 'react';
import { FormLabel as FormLabelChakra } from '@chakra-ui/react';

export const FormLabel = ({ children, name, ...props }: any) => {
  return (
    <FormLabelChakra
      htmlFor={name}
      fontSize="0.84rem"
      width="100%"
      mb="6px"
      {...props}
    >
      {children}
    </FormLabelChakra>
  );
};
