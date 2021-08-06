import React, { useContext } from 'react';
import { Grid, useColorModeValue } from '@chakra-ui/react';
import { SnippetsContext } from './Snippets';

export const SnippetsHeading = ({ children, ...props }) => {
    const { columns, gap, itemWidth } = useContext(SnippetsContext);
    const themeBgContainer = useColorModeValue('gray.50', 'gray.700');
    const themeBorderWidth = useColorModeValue('1px', 'none');
    return (
        <Grid
            fontSize="0.84rem"
            alignItems="center"
            pr="16px"
            pl="16px"
            gap={gap}
            height="36px"
            gridTemplateColumns={columns}
            borderColor="gray.100"
            borderBottomWidth={themeBorderWidth}
            backgroundColor={themeBgContainer}
            fontWeight="semibold"
            minWidth={itemWidth}
            position="sticky"
            top="0"
            zIndex={3}
            {...props}
        >
            {children}
        </Grid>
    );
};
