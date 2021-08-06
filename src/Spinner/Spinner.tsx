import React from 'react';
import { Flex, Spinner as SpinnerChakra } from '@chakra-ui/react';

export const Spinner = () => {
    return (
        <Flex height="150px" align="center" justify="center">
            <SpinnerChakra color="blue.500" />
        </Flex>
    );
};
