import React from 'react';
import { Heading as HeadingChakra } from '@chakra-ui/react';

export const Heading = ({ children, ...props }) => {
  return (
    <HeadingChakra
      fontSize="1.6rem"
      fontWeight="600"
    >
      {children}
    </HeadingChakra>
  );
};
