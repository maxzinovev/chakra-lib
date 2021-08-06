import React from 'react';
import { Flex, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

export const ItemCircularProgress = ({ icon, props }) => {
    return (
        <Flex align="center" justify="center" {...props}>
            <CircularProgress
                value={40}
                color="blue"
                size="36px"
                thickness={0.15}
            >
                <CircularProgressLabel fontSize="0.7rem">72</CircularProgressLabel>
            </CircularProgress>
        </Flex>
    );
};
