import React from 'react';
import { useWindowHeight } from '../useWindowHeight';
import { Box } from '@chakra-ui/react';

export const WindowScroller = ({ indentTop, children, ...props }) => {
  const windowHeight = useWindowHeight();
  return (
    <Box
      height={`${windowHeight - indentTop}px`}
      {...props}
    >
      {children}
    </Box>
  );
};
