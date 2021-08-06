import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SnippetsContext } from './Snippets';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Item = ({ to, children, ...props }) => {
  if (to) {
    return (
      <Link to={to} {...props}>{children}</Link>
    );
  }
  return (
    <Box {...props}>{children}</Box>
  )
}

export const SnippetsItem = ({ to = null, children, ...props }) => {
  const { columns, gap, itemWidth } = useContext(SnippetsContext);
  const themeColor = useColorModeValue('black', 'white');
  const themeBorderColor = useColorModeValue('gray.100', 'gray.700');
  const themeBgHover = useColorModeValue('gray.50', 'gray.700');
  const themeBgActive = useColorModeValue('gray.100', 'gray.700');
  return (
    <Item to={to} {...props}>
      <Box
        cursor="pointer"
        display="grid"
        role="group"
        gridGap={gap}
        minWidth={itemWidth}
        gridTemplateColumns={columns}
        padding="12px 16px"
        minHeight="62px"
        transition="0.3s"
        borderBottomWidth="1px"
        borderColor={themeBorderColor}
        color={themeColor}
        _hover={{
          backgroundColor: themeBgHover
        }}
        _focus={{
          //outline: 'none',
        }}
        _active={{
          backgroundColor: themeBgActive,
          //boxShadow: '0 0 0 3px rgba(66,153,225,0.6)',
        }}
        {...props}
      >
        {children}
      </Box>
    </Item>
  );
};

