import React from 'react';
import { Flex } from '@chakra-ui/react';

export const ItemBox = ({ isCenter = null, isWrap = null, children, props }) => {
    return (
        <Flex
            align="center"
            position="relative"
            justifyContent={isCenter ? 'center' : 'start'}
            whiteSpace={isWrap ? 'normal' : 'nowrap'}
            //overflow="hidden"
            {...props}
        >
            <Box {...props}>
                {children}
            </Box>
        </Flex>
    );
}
