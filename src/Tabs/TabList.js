import React from 'react';
import { TabList as ChakraTabList } from '@chakra-ui/react';

export const TabList = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ChakraTabList ref={ref} {...props}>{children}</ChakraTabList>
  );
});
