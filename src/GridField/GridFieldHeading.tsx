import React from 'react';
import { Box } from '@chakra-ui/react';

export const GridFieldHeading = ({ children }) => {
  return (
    <Box
      fontSize="1.2rem"
      fontWeight="semibold"
      marginBottom="14px"
    >
      {children}
    </Box>
  );
};
