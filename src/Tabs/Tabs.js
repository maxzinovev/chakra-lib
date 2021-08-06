import React from 'react';
import { Tabs as ChakraTabs } from '@chakra-ui/react';

export const Tabs = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ChakraTabs
      mt={3}
      variant="enclosed"
      ref={ref}
      {...props}
    >{children}</ChakraTabs>
  );
});
