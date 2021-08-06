import React from 'react';
import { Box } from '@chakra-ui/react';

export const GridField = ({ children, ...props }) => {
  return (
    <Box
      borderRadius={6}
      marginBottom="30px"
      {...props}
    >{children}</Box>
  );
};
