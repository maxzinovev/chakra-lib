import React from 'react';
import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';

export const TabPanels = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ChakraTabPanels
      ref={ref} {...props}
      pt={3}
    >
      {children}
    </ChakraTabPanels>
  );
});
