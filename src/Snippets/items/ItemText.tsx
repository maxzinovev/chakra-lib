import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export const ItemText = ({ isCenter = null, isWrap = null, isSmall = null, children, props }) => {
  const themeColorFontEmpty = useColorModeValue('gray.400', 'gray.600');
  return (
        <Flex
            align="center"
            position="relative"
            justifyContent={isCenter ? 'center' : 'start'}
            whiteSpace={isWrap ? 'normal' : 'nowrap'}
            overflow="hidden"
            {...props}
        >
            <Box
              fontSize={isSmall ? '0.9rem' : '1rem'}
              lineHeight="1.4"
              wordBreak={isWrap && 'break-all'}
              {...props}
            >
                {children ? children : <Text color={themeColorFontEmpty}>Нет данных</Text>}
            </Box>
        </Flex>
    );
}
