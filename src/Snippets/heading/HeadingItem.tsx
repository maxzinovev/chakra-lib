import React from 'react';
import { Flex } from '@chakra-ui/react';

export const HeadingItem = ({ isCenter, children, props }) => {
    return (
        <Flex justifyContent={isCenter ? 'center' : 'start'} {...props}>
            {children}
        </Flex>
    );
};
