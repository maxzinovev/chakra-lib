import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ItemLink = ({ to = null, children, ...props }) => {
  const themeColorFontEmpty = useColorModeValue('gray.400', 'gray.600');
  const themeColorFontHover = useColorModeValue('blue.400', 'blue.300');
  return (
    <Box
      display="flex"
      alignItems="center"
      transition="0.3s"
      whiteSpace="nowrap"
      overflow="hidden"
      position="relative"
      _groupHover={{
        color: themeColorFontHover
      }}
      {...props}
    >
      {to ? <Link to={to}>
        {children ? children : <Text color={themeColorFontEmpty}>Нет данных</Text>}
      </Link> : <Box>
        {children ? children : <Text color={themeColorFontEmpty}>Нет данных</Text>}
      </Box>}
    </Box>
  );
};
