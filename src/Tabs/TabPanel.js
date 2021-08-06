import React from 'react';
import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';

export const TabPanel = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ChakraTabPanel
      ref={ref}
      padding="20px 0"
      {...props}
    >{children}</ChakraTabPanel>
  );
});
